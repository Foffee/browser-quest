import TerrainChunk from '../../Terrain/TerrainChunk';
import ObjectChunk from '../../Objects/ObjectChunk';

const getExistingChunk = <T extends (TerrainChunk | ObjectChunk)>(oldChunks: T[], [ x, y ]: number[]) => {
    return oldChunks.find(c => c.centerX === x && c.centerY === y);
};

export default getExistingChunk;
