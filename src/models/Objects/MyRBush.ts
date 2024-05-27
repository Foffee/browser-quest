import RBush, { BBox } from 'rbush';

import ChunkObjectData from 'interfaces/objects/ChunkObjectData';

class MyRBush<T extends ChunkObjectData> extends RBush<T> {
    toBBox({ boundingBox }: T): BBox { return boundingBox; }

    compareMinX(a: T, b: T): number {
        return a.boundingBox.minX - b.boundingBox.minX;
    }

    compareMinY(a: T, b: T): number {
        return a.boundingBox.minY - b.boundingBox.minY;
    }
}

export default MyRBush;
