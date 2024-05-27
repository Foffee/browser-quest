import ChunkTileData from '../../interfaces/terrain/TerrainChunkTileData';

import renderTileImage from './renderTileImage';

const renderTileBorders = (ctx: CanvasRenderingContext2D, { borders }: ChunkTileData, x: number, y: number, offset: number[]) => {    
    // Rendering North-West Border
    if (borders.NW && borders.N && borders.W)
        renderTileImage(ctx, borders.NW.image, x - 1, y - 1, offset);
    
    // Rendering North Border
    if (borders.N)
        renderTileImage(ctx, borders.N.image, x, y - 1, offset);

    // Rendering North-East Border
    if (borders.NE && borders.N && borders.E)
        renderTileImage(ctx, borders.NE.image, x + 1, y - 1, offset);

    // Rendering West Border
    if (borders.W)
        renderTileImage(ctx, borders.W.image, x - 1, y, offset);

    // Rendering East Border
    if (borders.E)
        renderTileImage(ctx, borders.E.image, x + 1, y, offset);

    // Rendering South-West Border
    if (borders.SW && borders.S && borders.W)
        renderTileImage(ctx, borders.SW.image, x - 1, y + 1, offset);

    // Rendering South Border
    if (borders.S)
        renderTileImage(ctx, borders.S.image, x, y + 1, offset);

    // Rendering South-East Border
    if (borders.SE && borders.S && borders.E)
        renderTileImage(ctx, borders.SE.image, x + 1, y + 1, offset);
};

export default renderTileBorders;
