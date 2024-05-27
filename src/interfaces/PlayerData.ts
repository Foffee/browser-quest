import { MovementKeyList } from './MovementKeys';

import BoundingBox from 'types/BoundingBox';

interface PlayerData {
    position: number[];
    dimensions: number[];
    movementKeys: MovementKeyList;
    boundingBox: BoundingBox;
}

export default PlayerData;
