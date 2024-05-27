import TerrainChunk from './TerrainChunk';

import TerrainChunksData from '../../interfaces/terrain/TerrainChunksData';

import getChunksInDirections from '../helper/chunk/getChunksInDirection';
import getExistingChunk from '../helper/chunk/getExistingChunk';

import findChunkCenter from '../../utils/findChunkCenter';

import { CHUNK_SIZE, HALF_CHUNK_SIZE } from '../../config';

const Chunks = {
    center: [ -Infinity, -Infinity ],
    chunks: [  ] as TerrainChunk[],

    update(newCenter: number[], windowDimensions: number[]) {
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

        for (let y = topLeftCY; y <= bottomRightCY; y += CHUNK_SIZE) {
            for (let x = topLeftCX; x <= bottomRightCX; x += CHUNK_SIZE) {
                // We use the already generated chunk if it is there, or we create the chunk
                const chunk = getExistingChunk(oldChunks, [ x, y ]) || new TerrainChunk( x, y );
                this.chunks.push( chunk );
            }
        }

        // Update center to newCenter
        this.center = newCenter;
    },

    getTile(position: number[]) {
        /* Handling tiles that are out of the generated chunks */

        // Out of bounds if left of top-left chunk and right of bottom-right chunk
        if (position[0] < this.chunks[0].centerX - HALF_CHUNK_SIZE) return null;
        if (position[0] > (this.chunks.at(-1) as TerrainChunk).centerX + HALF_CHUNK_SIZE) return null;

        // Out of bounds if above top-left chunk and below bottom-right chunk
        if (position[1] < this.chunks[0].centerY - HALF_CHUNK_SIZE) return null;
        if (position[1] > (this.chunks.at(-1) as TerrainChunk).centerY + HALF_CHUNK_SIZE) return null;

        // If we reach here, then the position must belong to some chunk
        const chunk = getExistingChunk(this.chunks, findChunkCenter( position ));
        if (!chunk) return null;

        // Calculate the indices (i, j) for the tile where 0 <= i, j < CHUNK_SIZE
        let i = Math.abs(Math.floor(position[0]) - (chunk.centerX - HALF_CHUNK_SIZE));
        let j = Math.abs(Math.floor(position[1]) - (chunk.centerY - HALF_CHUNK_SIZE));

        // Small correction for chunks in the negative x & y axes
        if (i === CHUNK_SIZE && position[0] < 0) i = 0;
        if (j === CHUNK_SIZE && position[1] < 0) j = 0;

        return chunk.tiles[ j * CHUNK_SIZE + i ];
    },

    data(): TerrainChunksData {
        return { 
            chunks: this.chunks,
            
        };
    },

    getCenter() { return this.center; },
    getChunks() { return this.chunks; },
    
};

export default Chunks;
