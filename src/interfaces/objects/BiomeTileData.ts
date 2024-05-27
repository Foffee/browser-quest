import ObjectTileData from './ObjectTileData';

interface BiomeTileData {
    object: ObjectTileData;
    density: number;
    above: number[];
}

export default BiomeTileData;
