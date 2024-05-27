import Player from './Player';
import Terrain from './Terrain/Terrain';
import Objects from './Objects/Objects';

import { MovementKeys } from '../interfaces/MovementKeys';

import findChunkCenter from '../utils/findChunkCenter';

import { TILE_SIZE } from '../config';

const Models = {
    updateWorld(windowDimensions: number[]) {
        // We will require the center of the chunk that the Player is in
        // and the screen dimensions to update the models
        const pT = Player.data().position.map(v => v / TILE_SIZE);
        const chunkCenter = findChunkCenter( pT );

        Terrain.update( chunkCenter, windowDimensions );

        // We only generate objects if TILE_SIZE is 32
        if (TILE_SIZE === 32) {
            Objects.update( chunkCenter, windowDimensions, Terrain.data().chunks );

        }
    },

    getPlayerTile() {
        const { position: pCoordinates } = Player.data();
        return this.getTile( pCoordinates, 'coordinates' );
    },

    getTile(position: number[], type: 'coordinates' | 'tile_coordinates') {
        return Terrain
            .getTile(type === 'coordinates' ? position.map(v => (v / TILE_SIZE)) : position);
    },

    updatePlayerMovementKey(key: MovementKeys, value: boolean) {
        Player.updateMovementKey(key, value);
    },

    processMovement() { Player.processMovement(); },

    getTerrainData() { return Terrain.data(); },
    
    getObjectsData() { return Objects.data(); },
    getSortedObjects() { return Objects.getSortedObjects(); },

    getPlayerData()  { return Player.data(); },
};

export default Models;
