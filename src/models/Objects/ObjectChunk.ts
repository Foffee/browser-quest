// @ts-ignore
import FastPoissonDiskSampling from 'fast-2d-poisson-disk-sampling';
import Alea from 'alea';

import Biomes from './Biomes';
import TerrainChunk from '../Terrain/TerrainChunk';

import MyRBush from './MyRBush';

import createBiomeTally from '../helper/createBiomeTally';
import processBiomeTally from '../helper/processBiomeTally';

import ChunkObjectData from '../../interfaces/objects/ChunkObjectData';
import BiomeTileData from '../../interfaces/objects/BiomeTileData';

import BoundingBox from 'types/BoundingBox';

import { CHUNK_SIZE, HALF_CHUNK_SIZE, TILE_SIZE } from '../../config';

class Chunk {
    public readonly centerX: number;
    public readonly centerY: number;

    public quadTree: MyRBush<ChunkObjectData>;

    constructor(cX: number, cY: number) {
        this.centerX = cX;
        this.centerY = cY;

        this.quadTree = new MyRBush<ChunkObjectData>();
    }

    spawnObjects(terrainChunk: TerrainChunk, biomeTileData: BiomeTileData, density: number) {
        // Object distribution function
        const p = new FastPoissonDiskSampling({
            shape: [ CHUNK_SIZE, CHUNK_SIZE ],
            radius: 1 / density,
        });
        
        // @ts-ignore
        const rndFunc = new Alea( biomeTileData.object.id ); // seedable random function

        // @ts-ignore
        p.rng = rndFunc; // random function for the poisson disk
        const points = p.fill() as number[][]; // points are in [ x, y ] and 0 <= x, y < CHUNK_SIZE

        // For the object in biomeTileData, `above` tells us which tile can have the object
        // on top of it
        const { above } = biomeTileData;

        for (const [ x, y ] of points) {
            // Indices of the tile in the chunk
            const i = ~~x;
            const j = ~~y;

            // We won't spawn objects on the edges due to conflicts with other quadtrees
            if (i === 0 || j === 0 || i === CHUNK_SIZE - 1 || j === CHUNK_SIZE - 1) continue;

            // The (x, y) coordinates of the tile but scaled down by TILE_SIZE and floored
            const tX = (i + (terrainChunk.centerX - HALF_CHUNK_SIZE));
            const tY = (j + (terrainChunk.centerY - HALF_CHUNK_SIZE));
            
            // Get the terrain tile
            const terrainTile = terrainChunk.tiles[ j * CHUNK_SIZE + i ];

            if (terrainTile) {
                // If object can be placed over this terrain tile
                if (above.includes(terrainTile.tile.id)) {
                    // Create the bounding box for the object
                    const minX = tX * TILE_SIZE + biomeTileData.object.bbPosition[0];
                    const minY = tY * TILE_SIZE + biomeTileData.object.bbPosition[1];

                    const bb: BoundingBox = {
                        minX,
                        minY,
                        maxX: minX + biomeTileData.object.bbDimensions[0],
                        maxY: minY + biomeTileData.object.bbDimensions[1],
                    };

                    // Check if the object collides with other objects
                    const isColliding = this.quadTree.collides(bb);

                    // If it doesn't then we can insert the object in the chunk
                    if (!isColliding) {
                        this.quadTree.insert({
                            position: [ tX, tY ],
                            boundingBox: bb,
                            object: biomeTileData.object,
                        });
                    }
                }
            }
        }
    }

    generate(terrainChunk: TerrainChunk) {
        /* Tallying */

        // 1) Create a tally for the biomes
        const biomeTally = createBiomeTally();

        // 2) Tally up the biomes with the terrain tiles in the chunk
        for (const { tile } of terrainChunk.tiles) ++biomeTally[tile.biome];

        // 3) We remove the biomes that had no expression in the chunk
        processBiomeTally( biomeTally );

        /* We now have the influence of the present biomes on the chunk */
        const objectDensities: Map<BiomeTileData, number> = new Map();

        // 4) We now find the density of the tiles in the biome
        for (const [ biomeName, biomeInfluence ] of Object.entries(biomeTally)) {
            const { objects: biomeObjects } = Biomes[ biomeName ];

            for (const obj of Object.values(biomeObjects)) {
                const prevDensity = objectDensities.get(obj);
                objectDensities.set(obj, biomeInfluence * obj.density + (prevDensity || 0));
            } 
        }

        // If the map is empty, we quit
        if (objectDensities.size === 0) return;

        // 5) With the influenced object densities, we can now spawn the objects for the chunk
        for (const [ biomeTileData, density ] of objectDensities.entries())
            this.spawnObjects( terrainChunk, biomeTileData, density );
    }
}

export default Chunk;
