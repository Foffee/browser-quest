import RenderData from '../interfaces/RenderData';

import ViewType from '../types/ViewType';

import renderTileImage from './helper/renderTileImage';

import viewResize from './helper/viewResize';
import viewLoad from './helper/viewLoad';

import { DRAW_TILE_UNDERNEATH, DRAW_BOUNDING_BOXES } from './helper/options';
import { CHUNK_SIZE, HALF_CHUNK_SIZE, TILE_SIZE } from '../config';

const ObjectsView: ViewType = {
    // The drawing tool of the canvas
    ctx: null,

    // If successful, the context is saved
    load() { this.ctx = viewLoad('objects', 'Objects'); },

    render(data: RenderData) {
        // We can't render if the context is invalid
        if (!this.ctx) return;

        // The offset is the negative of the player position becauses this forces
        // all tiles back to the center
        const offset = data.player.position.map(v => -v);

        // We get the top left and bottom right chunks (first and last chunks)
        const { chunks } = data.terrain;

        const topLeftChunk = chunks[0];
        const bottomRightChunk = chunks.at(-1);

        if (bottomRightChunk) {
            // This clears the objects on the screen (from top-left chunk to bottom-right)
            this.ctx.clearRect(
                (topLeftChunk.centerX - HALF_CHUNK_SIZE) * TILE_SIZE + offset[0],
                (topLeftChunk.centerY - HALF_CHUNK_SIZE) * TILE_SIZE + offset[1],
                (CHUNK_SIZE * TILE_SIZE) * chunks.length,
                (CHUNK_SIZE * TILE_SIZE) * chunks.length,
            );
        }

        // Render objects
        for (const obj of data.objects) {
            // Fill tile underneath object if set
            if (DRAW_TILE_UNDERNEATH) {
                this.ctx.fillStyle = '#f00'; // Red fill
                
                this.ctx.fillRect(
                    obj.position[0] * TILE_SIZE + offset[0] - ~~(TILE_SIZE / 2),
                    obj.position[1] * TILE_SIZE + offset[1] - ~~(TILE_SIZE / 2),
                    TILE_SIZE,
                    TILE_SIZE
                );
            }
            
            // Render the tile's image
            renderTileImage(
                this.ctx, 
                obj.object.image,
                obj.position[0],
                obj.position[1],
                offset
            );

            // Draw bounding boxes if set
            if (DRAW_BOUNDING_BOXES) {
                this.ctx.strokeStyle = '#00f'; // Blue edges

                this.ctx.strokeRect(
                    obj.boundingBox.minX + offset[0],
                    obj.boundingBox.minY + offset[1],
                    obj.boundingBox.maxX - obj.boundingBox.minX,
                    obj.boundingBox.maxY - obj.boundingBox.minY,
                );
            }
        }
    },

    resize(width: number, height: number) {
        if (this.ctx) viewResize(this.ctx, width, height);
    }
};

export default ObjectsView;