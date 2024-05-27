import ObjectChunks from './Objects/ObjectChunks';
import ImageLoader from './ImageLoader';

import PlayerData from '../interfaces/PlayerData';
import { MovementKeys } from '../interfaces/MovementKeys';

import { TILE_SIZE } from '../config';

const Player = {
    // position has the center coordinates of the Player
    // dimensions is the width and height of the Player
    position: [ 0 * TILE_SIZE, 0 * TILE_SIZE ],
    dimensions: [ 16, 16 ],

    // W - North, A - West, S - South, D - East for movement
    movementKeys: {
        W: false,
        A: false,
        S: false,
        D: false,
    },

    // This will be kept constant as the Player is the center of the world!
    boundingBox: {
        minX: -8,
        minY: -8,

        maxX: 8,
        maxY: 8
    },

    updateMovementKey(key: MovementKeys, value: boolean) {
        if (key in this.movementKeys) this.movementKeys[key] = value;
    },

    move(dx: number, dy: number) {
        // Updates position from (x, y) to (x + dx, y + dy)
        this.position[0] += dx;
        this.position[1] += dy;
    },

    canMove(dx: number, dy: number) {
        // If TILE_SIZE is not 32, then we can safely move wherever
        if (TILE_SIZE !== 32) return true;

        // minX and minY refer to the coordinates of the top-left corner of the bounding box
        const minX = (this.position[0] - ~~(this.dimensions[0] / 2)) + dx;
        const minY = (this.position[1] - ~~(this.dimensions[1] / 2)) + dy;

        // maxX and maxY refer to the bottom right coordinates
        // Now, we can safely move if no collisions were detected
        return !(ObjectChunks.collides({
            minX: minX,
            minY: minY,
            maxX: minX + this.dimensions[0] + dx,
            maxY: minY + this.dimensions[1] + dy,
        }));
    },

    canMoveNorth() { return this.canMove(0, -1); },
    canMoveWest()  { return this.canMove(-1, 0); },
    canMoveSouth() { return this.canMove(0, +1); },
    canMoveEast()  { return this.canMove(+1, 0); },

    moveNorth(speed: number = 1) {
        if (!this.canMoveNorth()) return;
        this.move(0, -speed);
    },

    moveWest(speed: number = 1) {
        if (!this.canMoveWest()) return;
        this.move(-speed, 0);
    },

    moveSouth(speed: number = 1) {
        if (!this.canMoveSouth()) return;
        this.move(0, +speed);
    },

    moveEast(speed: number = 1) {
        if (!this.canMoveEast()) return;
        this.move(+speed, 0);
    },

    processMovement() {
        // Move North-West
        if (this.movementKeys['W'] && this.movementKeys['A']) {
            this.moveNorth(Math.SQRT1_2);
            this.moveWest(Math.SQRT1_2);
        }

        // Move North-East
        else if (this.movementKeys['W'] && this.movementKeys['D']) {
            this.moveNorth(Math.SQRT1_2);
            this.moveEast(Math.SQRT1_2);
        }

        // Move South-West
        else if (this.movementKeys['S'] && this.movementKeys['A']) {
            this.moveSouth(Math.SQRT1_2);
            this.moveWest(Math.SQRT1_2);
        }

        // Move South-East
        else if (this.movementKeys['S'] && this.movementKeys['D']) {
            this.moveSouth(Math.SQRT1_2);
            this.moveEast(Math.SQRT1_2);
        }

        else if (this.movementKeys['W']) this.moveNorth();
        else if (this.movementKeys['A']) this.moveWest();
        else if (this.movementKeys['S']) this.moveSouth();
        else if (this.movementKeys['D']) this.moveEast();
    },

    data(): PlayerData {
        return {
            position: this.position,
            dimensions: this.dimensions,
            movementKeys: this.movementKeys,
            boundingBox: this.boundingBox
        };
    }
};

export default Player;
