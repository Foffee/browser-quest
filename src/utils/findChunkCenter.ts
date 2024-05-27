import { CHUNK_SIZE, HALF_CHUNK_SIZE } from '../config';

function findChunkCenter([ tX, tY ]: number[]) {
    const kX = Math.floor((tX + 7 + (tX >= HALF_CHUNK_SIZE ? +1 : 0)) / CHUNK_SIZE);
    const kY = Math.floor((tY + 7 + (tY >= HALF_CHUNK_SIZE ? +1 : 0)) / CHUNK_SIZE);

    const sX = -8 + CHUNK_SIZE * kX;
    const eX = +8 + CHUNK_SIZE * kX;

    const sY = -8 + CHUNK_SIZE * kY;
    const eY = +8 + CHUNK_SIZE * kY;

    // console.log({ sX, sY }, { eX, eY });
    return [ Math.floor((sX + eX) / 2), Math.floor((sY + eY) / 2) ];
}

export default findChunkCenter;
