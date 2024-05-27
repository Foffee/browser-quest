import ChunkTileData from '../../interfaces/terrain/TerrainChunkTileData';

import lerpColor from '../../utils/lerpColor';

import { TILE_SIZE } from '../../config';

const renderTileColor = (ctx: CanvasRenderingContext2D, { tile, height }: ChunkTileData, x: number, y: number, [ offX, offY ]: number[]) => {
    // Get the color in between the min and max for the tile
    ctx.fillStyle = lerpColor(
        tile.min.color,
        tile.max.color,
        (height - tile.min.height) / (tile.max.height - tile.min.height)
    );

    // Render the tile at center (x, y) with dimensions of TILE_SIZE x TILE_SIZE
    ctx.fillRect( 
        x * TILE_SIZE + offX - ~~(TILE_SIZE / 2),
        y * TILE_SIZE + offY - ~~(TILE_SIZE / 2),
        TILE_SIZE,
        TILE_SIZE
    ); 
};

export default renderTileColor;
