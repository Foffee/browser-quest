import RenderData from '../interfaces/RenderData';

import ViewType from '../types/ViewType';

import viewResize from './helper/viewResize';
import viewLoad from './helper/viewLoad';

import { DRAW_PLAYER_HITBOX } from './helper/options';

const MobsView: ViewType = {
    // The drawing tool of the canvas
    ctx: null,

    // If successful, the context is saved
    load() { this.ctx = viewLoad('mobs', 'Mobs'); },

    render(data: RenderData) {
        // We can't render if the context is invalid
        if (!this.ctx) return;

        // Render the Player
        this.ctx.fillStyle = '#f00';
        this.ctx.fillRect(
            -~~(data.player.dimensions[0] / 2),
            -~~(data.player.dimensions[1] / 2),
            data.player.dimensions[0],
            data.player.dimensions[1],
        );
        
        // Draw bounding box if set
        if (DRAW_PLAYER_HITBOX) {
            this.ctx.strokeStyle = '#fff';
            this.ctx.strokeRect(
                data.player.boundingBox.minX,
                data.player.boundingBox.minY,
                data.player.boundingBox.maxX - data.player.boundingBox.minX,
                data.player.boundingBox.maxY - data.player.boundingBox.minY,
            );
        }
    },

    resize(width: number, height: number) {
        if (this.ctx) viewResize(this.ctx, width, height);
    }
};

export default MobsView;