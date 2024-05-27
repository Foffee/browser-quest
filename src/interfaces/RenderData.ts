import TerrainData from 'interfaces/terrain/TerrainData';
import ChunkObjectData from 'interfaces/objects/ChunkObjectData';

import PlayerData from './PlayerData';

interface RenderData {
    terrain: TerrainData;
    objects: ChunkObjectData[];

    player: PlayerData;
}

export default RenderData;
