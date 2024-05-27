import ChunkObject from '../interfaces/objects/ChunkObjectData';

const compareCoordinates = (objA: ChunkObject, objB: ChunkObject) => {
    const [ xA, yA ] = objA.position;
    const [ xB, yB ] = objB.position;

    // 1) objA < objB if yA < yB
    if (yA < yB) return -1;

    // 2) objA > objB if yA > yB
    if (yA > yB) return 1;

    // 3) objA < objB if xA < xB
    if (xA < xB) return -1;

    // All other cases are treated as equality
    return 0;
};

const insertSortCoordinates = (objects: ChunkObject[], obj: ChunkObject) => {
    // 1) Add obj to end of list
    objects.push(obj);

    // 2) Keep swapping with previous entries until obj is at the correct position
    let curIndex = objects.length - 1;
    while (curIndex > 0 && compareCoordinates(objects[curIndex - 1], objects[curIndex]) > 0) {
        [objects[curIndex - 1], objects[curIndex]] = [objects[curIndex], objects[curIndex - 1]];
        --curIndex;
    }
};

export default insertSortCoordinates;
