// The width and height of each tile
export const TILE_SIZE: number = 32;

// Half of the tile size
export const HALF_TILE_SIZE = TILE_SIZE / 2;

// A chunk has CHUNK_SIZE x CHUNK_SIZE tiles in total
export const CHUNK_SIZE: number = 17;

// Number of tiles in a chunk (CHUNK_SIZE * CHUNK_SIZE)
export const NUM_CHUNK_TILES = CHUNK_SIZE * CHUNK_SIZE;

// Half the chunk size is required in some calculations
export const HALF_CHUNK_SIZE = ~~(CHUNK_SIZE / 2); 


