import ObjectTileData from './ObjectTileData';

import BoundingBox from 'types/BoundingBox';

interface ChunkObjectData {
    position: number[];
    boundingBox: BoundingBox;
    object: ObjectTileData;
}

export default ChunkObjectData;
