import TileData from '../tile/TileData';
import TileColorBoundary from '../tile/TileColorBoundary';
import ImageData from '../ImageData';

interface TerrainTileData extends TileData {
    min: TileColorBoundary;
    max: TileColorBoundary;
    image: ImageData;
    zIndex: number;
    biome: string;
}

export default TerrainTileData;