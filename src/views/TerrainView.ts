import RenderData from '../interfaces/RenderData';

import renderTileBorders from './helper/renderTileBorders';
import renderTileColor from './helper/renderTileColor';
import renderTileImage from './helper/renderTileImage';

import viewResize from './helper/viewResize';
import viewLoad from './helper/viewLoad';

import findChunkCenter from '../utils/findChunkCenter';

import ViewType from '../types/ViewType';

import { HIGHLIGHT_CURRENT_CHUNK } from './helper/options';
import { TILE_SIZE, CHUNK_SIZE, HALF_CHUNK_SIZE } from '../config';

const TerrainView: ViewType = {
    // The drawing tool of the canvas
    ctx: null,

    // If successful, the context is saved
    load() { this.ctx = viewLoad('terrain', 'Terrain'); },

    render(data: RenderData) {
        // We can't render if the context is invalid
        if (!this.ctx) return;

        // The offset is the negative of the player position becauses this forces
        // all tiles back to the center
        const offset = data.player.position.map(v => -v);

        // The basic, non-bordered tiles are drawn first
        for (const chunk of data.terrain.chunks) {
            // Center coordinates of the chunk
            const { centerX: cX, centerY: cY } = chunk;

            // Tiles are determined by their coordinate (i, j) in `tiles`
            // where 0 <= i, j < CHUNK_SIZE 

            let j = 0;
            for (let y = cY - HALF_CHUNK_SIZE; y <= cY + HALF_CHUNK_SIZE; y++) {
                let i = 0;

                for (let x = cX - HALF_CHUNK_SIZE; x <= cX + HALF_CHUNK_SIZE; x++) {
                    // Get tile at (i, j)
                    const terrainTile = chunk.tiles[ j * CHUNK_SIZE + (i++) ];
                    
                    // Since images are only defined for 32x32,
                    // we only uses tile colors for any other TILE_SIZE
                    if (TILE_SIZE < 32)
                        renderTileColor(this.ctx, terrainTile, x, y, offset);
                    
                    // Uses tile images for 32x32 tiles
                    else {
                        // Extract the tile information
                        const { tile: actualTile } = terrainTile;

                        // We'll draw the tile image if it is defined (dw != 0)
                        if (actualTile.image.dw)
                            renderTileImage(this.ctx, actualTile.image, x, y, offset);
                        
                        // Otherwise we stick to tile colors (dw = 0)
                        else renderTileColor(this.ctx, terrainTile, x, y, offset);
                    }
                }

                ++j;
            }
        }

        // We draw the bordered tiles if TILE_SIZE is 32
        if (TILE_SIZE === 32) {
            for (const chunk of data.terrain.chunks) {
                // Center coordinates of the chunk
                const { centerX: cX, centerY: cY } = chunk;
    
                let j = 0;
                for (let y = cY - HALF_CHUNK_SIZE; y <= cY + HALF_CHUNK_SIZE; y++) {
                    let i = 0;
    
                    for (let x = cX - HALF_CHUNK_SIZE; x <= cX + HALF_CHUNK_SIZE; x++) {
                        // Get the tile at (i, j) and its actual information
                        const terrainTile = chunk.tiles[ j * CHUNK_SIZE + (i++) ];
                        const { tile: actualTile } = terrainTile;

                        // Once again, we only draw the image if it is defined (dw != 0)
                        if (actualTile.image.dw) 
                            renderTileBorders(this.ctx, terrainTile, x, y, offset);
                    }
    
                    ++j;
                }
            }

            // Highlight the current chunk if set
            if (HIGHLIGHT_CURRENT_CHUNK) {
                // Find the center of the current chunk the Player is in
                const [ cX, cY ] = findChunkCenter(data.player.position.map(v => ~~(v / TILE_SIZE)));

                // Highlight the chunk!
                this.ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
                this.ctx.fillRect(
                    ((cX - HALF_CHUNK_SIZE) * TILE_SIZE) + offset[0],
                    ((cY - HALF_CHUNK_SIZE) * TILE_SIZE) + offset[1],
                    CHUNK_SIZE * TILE_SIZE,
                    CHUNK_SIZE * TILE_SIZE,
                );
            }
        }
    },

    resize(width: number, height: number) {
        if (this.ctx) viewResize(this.ctx, width, height);
    }
};

export default TerrainView;