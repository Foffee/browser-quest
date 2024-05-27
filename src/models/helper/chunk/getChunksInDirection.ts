import { CHUNK_SIZE, TILE_SIZE } from '../../../config';

const getChunksInDirections = ([ winWidth, winHeight ]: number[]) => {        
    // Calculate number of chunks needed to the right
    let numRightChunks = 1; // Min is 1
    while (CHUNK_SIZE * TILE_SIZE * numRightChunks <= winWidth)
        numRightChunks++;

    // Calculate number of chunks needed below
    let numBelowChunks = 1; // Min is 1
    while (CHUNK_SIZE * TILE_SIZE * numBelowChunks <= winHeight)
        numBelowChunks++;

    return [ numRightChunks, numBelowChunks ];
};

export default getChunksInDirections;
