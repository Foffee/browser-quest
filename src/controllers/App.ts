import Models from '../models/Models';
import Views from '../views/Views';

import * as WindowEvents from './WindowEvents';

const App = {
    models: Models,
    views: Views,

    setup(): void {
        // Load views
        this.views.load();

        // Initial (re)sizing
        this.resize();

        // Initial generation of the world
        this.models.updateWorld([ window.innerWidth, window.innerHeight ]);

        // Attach event listeners
        this.handleEvents();

        // Run the App
        this.run();
    },

    run(): number {
        // Skip frame if the views haven't loaded yet
        if (!this.views.loaded) 
            return requestAnimationFrame(() => this.run());

        // Process player movement (if there is any)
        this.models.processMovement();

        // Update world (if needed)
        this.models.updateWorld([ window.innerWidth, window.innerHeight ]);

        // this.models.getPlayerTile();
        // console.log(this.models.getPlayerTile()?.tile.name);

        // Render the views
        this.views.render({
            terrain: this.models.getTerrainData(),
            objects: this.models.getSortedObjects(),

            player:  this.models.getPlayerData(),
            

        });

        // Move to next frame of game loop
        return requestAnimationFrame(() => this.run());
    },

    handleEvents() {
        window.addEventListener('keydown', WindowEvents.KeyDown);
        window.addEventListener('keyup', WindowEvents.KeyUp);
    },

    resize() {
        // Resize all view elements
        this.views.resize();
    }
};

export default App;
