import TileImage from '../../interfaces/ImageData';

import { TILE_SIZE } from '../../config';

const renderTileImage = (ctx: CanvasRenderingContext2D, image: TileImage, x: number, y: number, [ offX, offY ]: number[]) => {
    // First we extract the clipped portion from src from top-left corner (sx, sy) and
    // dimensions (sw, sh). Then that portion is rendered onto the canvas from
    // top-left corner (dx, dy) and dimensions (dw, dh)
    ctx.drawImage(
        image.src,
        image.sx,
        image.sy,
        image.sw,
        image.sh,
        image.dx(x) + offX - ~~(TILE_SIZE / 2),
        image.dy(y) + offY - ~~(TILE_SIZE / 2),
        image.dw,
        image.dh
    );
};

export default renderTileImage;
