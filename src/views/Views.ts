import RenderData from '../interfaces/RenderData';

import TerrainView from './TerrainView';
import ObjectsView from './ObjectsView';
import MobsView from './MobsView';

import { TILE_SIZE } from '../config';

const Views = {
    // Once all canvases and their contexts are loaded from the DOM, this is set to true
    // to allow for rendering the model data
    loaded: false,

    load() {
        // Load all views
        TerrainView.load();
        ObjectsView.load();
        MobsView.load();


        // We may now proceed to rendering
        this.loaded = true;
    },

    render(data: RenderData) {
        // Render terrain
        TerrainView.render( data );

        // If the tiles are 32x32, then we render the objects
        if (TILE_SIZE === 32) {
            ObjectsView.render( data );
            MobsView.render( data );
        }
    },

    resize() {
        // Get the width and height of the window
        const { innerWidth, innerHeight } = window;

        // Resize views accordingly
        TerrainView.resize( innerWidth, innerHeight );
        ObjectsView.resize( innerWidth, innerHeight );
        MobsView.resize( innerWidth, innerHeight );
    }
};

export default Views;
