import { TILE_SIZE } from '../../config';

const resize = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    if (ctx) {
        // Set the internal dimensions of the context's canvas
        ctx.canvas.width = width;
        ctx.canvas.height = height;

        // Set the point (0, 0) to the center of the canvas (by default, it's the top left corner)
        ctx.translate(
            ~~(ctx.canvas.width  / 2) - ~~(TILE_SIZE / 2),
            ~~(ctx.canvas.height / 2) - ~~(TILE_SIZE / 2),
        );
    }
};

export default resize;
