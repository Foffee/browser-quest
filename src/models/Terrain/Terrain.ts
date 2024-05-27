import TerrainChunks from './TerrainChunks';

import TerrainData from '../../interfaces/terrain/TerrainData';

const Terrain = {
    update(chunkCenter: number[], windowDimensions: number[]) {
        TerrainChunks.update( chunkCenter, windowDimensions );
    },

    getTile(position: number[]) { return TerrainChunks.getTile( position ); },

    data(): TerrainData {
        return {
            chunks: TerrainChunks.data().chunks,
            
        };
    }
};

export default Terrain;
