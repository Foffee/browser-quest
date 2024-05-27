import TerrainChunk from '../Terrain/TerrainChunk';
import ObjectChunks from './ObjectChunks';

import ObjectsData from 'interfaces/objects/ObjectsData';

const Objects = {
    update(chunkCenter: number[], windowDimensions: number[], terrainChunks: TerrainChunk[]) {
        ObjectChunks.update( chunkCenter, windowDimensions, terrainChunks );
    },

    getSortedObjects() { return ObjectChunks.extractAndSortObjects(); },
    
    data(): ObjectsData {
        return {
            chunks: ObjectChunks.data().chunks,

        };
    }
};

export default Objects;
