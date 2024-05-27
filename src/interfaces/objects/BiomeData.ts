import BiomeTileData from './BiomeTileData';

interface BiomeData {
    terrainTiles: number[];
    objects: { [key: number]: BiomeTileData; };
}

export default BiomeData;