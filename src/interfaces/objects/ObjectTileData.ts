import TileData from '../tile/TileData';
import ImageData from '../ImageData';

interface ObjectTileData extends TileData {
    image: ImageData;

    bbPosition: number[];
    bbDimensions: number[];
}

export default ObjectTileData;
