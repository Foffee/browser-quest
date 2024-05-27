import Models from '../models/Models';

import { MovementKeys } from '../interfaces/MovementKeys';

export const KeyDown = ({ code }: KeyboardEvent) => {
    if ([ 'KeyW', 'KeyA', 'KeyS', 'KeyD' ].includes(code))
        Models.updatePlayerMovementKey(code.charAt(3) as MovementKeys, true);
};

export const KeyUp = ({ code }: KeyboardEvent) => {
    if ([ 'KeyW', 'KeyA', 'KeyS', 'KeyD' ].includes(code))
        Models.updatePlayerMovementKey(code.charAt(3) as MovementKeys, false);
};
