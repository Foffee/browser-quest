import ObjectChunk from './ObjectChunk';
import TerrainChunk from '../Terrain/TerrainChunk';
import ChunkObjectData from '../../interfaces/objects/ChunkObjectData';

import ObjectChunksData from '../../interfaces/objects/ObjectChunksData';

import getChunksInDirections from '../helper/chunk/getChunksInDirection';
import getExistingChunk from '../helper/chunk/getExistingChunk';

import BoundingBox from '../../types/BoundingBox';

import findChunkCenter from '../../utils/findChunkCenter';
import insertSortObjects from '../../utils/insertSortObjects';

import { CHUNK_SIZE, TILE_SIZE } from '../../config';

const Chunks = {
    center: [ -Infinity, -Infinity ],
    chunks: [  ] as ObjectChunk[],

    sortedObjects: [  ] as ChunkObjectData[],
    updated: true,

    update(newCenter: number[], windowDimensions: number[], terrainChunks: TerrainChunk[]) {
        // We don't need to update if the chunk center is the same as before
        if (this.center[0] === newCenter[0] && this.center[1] === newCenter[1]) return;

        // We save the current chunks because we will use some of them in the new ones
        const oldChunks = this.chunks;

        // Clear the chunks
        this.chunks = [  ];

        // Get number of chunks needed in each direction
        const [ numRightChunks, numBelowChunks ] = getChunksInDirections( windowDimensions );

        // Calculate centers for the top left chunk and bottom right chunk
        const topLeftCX = (newCenter[0] - numRightChunks * CHUNK_SIZE);
        const topLeftCY = (newCenter[1] - numBelowChunks * CHUNK_SIZE);

        const bottomRightCX = (newCenter[0] + numRightChunks * CHUNK_SIZE);
        const bottomRightCY = (newCenter[1] + numBelowChunks * CHUNK_SIZE);

        // Tracks current terrain chunk
        let currentChunkIndex = 0;

        for (let y = topLeftCY; y <= bottomRightCY; y += CHUNK_SIZE) {
            for (let x = topLeftCX; x <= bottomRightCX; x += CHUNK_SIZE) {
                // We use the already generated chunk if it is there, or we create the chunk
                let chunk = getExistingChunk(oldChunks, [ x, y ]);
                
                // We will need to also generate the objects in that chunk
                if (!chunk) {
                    chunk = new ObjectChunk( x, y );
                    chunk.generate( terrainChunks[currentChunkIndex++] );
                }

                this.chunks.push(chunk);
            }
        }

        // An update occurred!
        this.updated = true;

        // Update center to newCenter
        this.center = newCenter;
    },

     // Returns the objects in the chunks sorted by ascending y then ascending x
    extractAndSortObjects() {
        // If there are no new updates, return the old sorted objects
        if (!this.updated) return this.sortedObjects;

        // We need to store the sorted objects
        const objects: ChunkObjectData[] = [  ];

        // Go through each chunk and each object in the chunk
        for (const chunk of this.chunks)
            for (const chunkObj of chunk.quadTree.all())
                insertSortObjects( objects, chunkObj ); // place the object in sorted order

        // We finished updating the sortedObjects
        this.updated = false;

        // Save those objects and return them
        this.sortedObjects = objects;
        return objects;
    },

    collides(bb: BoundingBox) {
        const chunkCenter = findChunkCenter([
            Math.floor(((bb.minX + bb.maxX) / 2) / TILE_SIZE),
            Math.floor(((bb.minY + bb.maxY) / 2) / TILE_SIZE),
        ]);

        const chunk = getExistingChunk( this.chunks, chunkCenter );
        if (!chunk) throw new Error('ERROR: Checking for collisions in INVALID chunk!');
        
        return chunk.quadTree.collides(bb);
    },

    data(): ObjectChunksData {
        return { 
            chunks: this.chunks
            
        };
    },

    getCenter() { return this.center; },
    getChunks() { return this.chunks; },
    
};

export default Chunks;
