import TerrainChunkTileData from '../../interfaces/terrain/TerrainChunkTileData';

import TerrainValue from './TerrainValue';
import TerrainBorder from './TerrainBorder';

import { CHUNK_SIZE, HALF_CHUNK_SIZE, TILE_SIZE } from '../../config';

class TerrainChunk {
    public readonly centerX: number;
    public readonly centerY: number;

    public tiles: TerrainChunkTileData[];

    constructor(cX: number, cY: number) {
        // (x, y) coordinates of the chunk but scaled down by TILE_SIZE and floored
        this.centerX = cX;
        this.centerY = cY;

        // this.tiles contains CHUNK_SIZE x CHUNK_SIZE values for the tiles in the chunk
        this.tiles = [  ];
        this.generateTiles(); // fill this.tiles with values

        // Borders are only generated if tiles are 32x32
        if (TILE_SIZE === 32) this.generateTileBorders();
    }

    private generateTiles() {
        let j = 0;
        for (let y = this.centerY - HALF_CHUNK_SIZE; y <= this.centerY + HALF_CHUNK_SIZE; y++) {
            let i = 0;
            
            for (let x = this.centerX - HALF_CHUNK_SIZE; x <= this.centerX + HALF_CHUNK_SIZE; x++) {
                // Set the tile at (i, j) in this.tiles
                this.tiles[j * CHUNK_SIZE + (i++)] = TerrainValue( x, y );
            }

            ++j;
        }
    }

    private decideBorders(tile: TerrainChunkTileData, [ x, y ]: number[], [ i, j ]: number[]) {
        // Get the neighboring tiles around the tile at (x, y)
        // NW N NE
        //  W T  E
        // SW S SE
        let [ NW, N, NE, W, E, SW, S, SE ] = [
            this.tiles[(j - 1) * CHUNK_SIZE + (i - 1)],
            this.tiles[(j - 1) * CHUNK_SIZE + (i - 0)],
            this.tiles[(j - 1) * CHUNK_SIZE + (i + 1)],
            this.tiles[(j - 0) * CHUNK_SIZE + (i - 1)],
            this.tiles[(j - 0) * CHUNK_SIZE + (i + 1)],
            this.tiles[(j + 1) * CHUNK_SIZE + (i - 1)],
            this.tiles[(j + 1) * CHUNK_SIZE + (i - 0)],
            this.tiles[(j + 1) * CHUNK_SIZE + (i + 1)],
        ];

        // Note: If the tile lies along the edges of the chunk, some neighbors
        // may not be defined, in this case, we generate them

        if (i === 0 || j === 0) NW = TerrainValue( x - 1, y - 1 );
        if (j === 0) N = TerrainValue( x - 0, y - 1 );
        if (i === CHUNK_SIZE - 1 || j === 0) NE = TerrainValue( x + 1, y - 1 );

        if (i === 0) W = TerrainValue( x - 1, y - 0 );
        if (i === CHUNK_SIZE - 1) E = TerrainValue( x + 1, y - 0 );

        if (i === 0 || j === CHUNK_SIZE - 1) SW = TerrainValue( x - 1, y + 1 );
        if (j === CHUNK_SIZE - 1) S = TerrainValue( x - 0, y + 1 );
        if (i === CHUNK_SIZE - 1 || j === CHUNK_SIZE - 1) SE = TerrainValue( x + 1, y + 1 );

        // We need the z-index and id of the base tile
        const { tile: baseTile } = tile;
        const { id, zIndex } = baseTile;

        // If the z-index of this tile is higher than a neighboring's,
        // then we must make a border with it (higher z-index makes the border)

        // 1 - NW, 2 - N, 3 - NE, 4 - W, 5 - E, 6 - SW, 7 - S, 8 - SE
        // These above numbers identify the border tile used in the Tile List
        tile.borders = {
            NW: (zIndex > NW.tile.zIndex) ? TerrainBorder(id, 1) : null,
            N:  (zIndex > N.tile.zIndex) ? TerrainBorder(id, 2) : null,
            NE: (zIndex > NE.tile.zIndex) ? TerrainBorder(id, 3) : null,

            W: (zIndex > W.tile.zIndex) ? TerrainBorder(id, 4) : null,
            E: (zIndex > E.tile.zIndex) ? TerrainBorder(id, 5) : null,

            SW: (zIndex > SW.tile.zIndex) ? TerrainBorder(id, 6) : null,
            S:  (zIndex > S.tile.zIndex) ? TerrainBorder(id, 7) : null,
            SE: (zIndex > SE.tile.zIndex) ? TerrainBorder(id, 8) : null,
        };
    }

    private generateTileBorders() {
        let j = 0;
        for (let y = this.centerY - HALF_CHUNK_SIZE; y <= this.centerY + HALF_CHUNK_SIZE; y++) {
            let i = 0;
            
            for (let x = this.centerX - HALF_CHUNK_SIZE; x <= this.centerX + HALF_CHUNK_SIZE; x++)
                this.decideBorders(this.tiles[j * CHUNK_SIZE + i], [ x, y ], [ (i++), j ]);

            ++j;
        }
    }
}

export default TerrainChunk;
