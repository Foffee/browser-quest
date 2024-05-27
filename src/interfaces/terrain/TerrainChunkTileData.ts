import TerrainTileData from './TerrainTileData';

interface TerrainChunkTileData {
    height: number;
    moisture: number;
    temperature: number;

    tile: TerrainTileData;
    borders: {
        NW: TerrainTileData | null;
        N: TerrainTileData | null;
        NE: TerrainTileData | null;

        W: TerrainTileData | null;
        E: TerrainTileData | null;

        SW: TerrainTileData | null;
        S: TerrainTileData | null;
        SE: TerrainTileData | null;
    };
}

export default TerrainChunkTileData;
