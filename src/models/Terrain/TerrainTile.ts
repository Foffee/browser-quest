import Tile from '../Tile';

import TileColorBoundary from '../../interfaces/tile/TileColorBoundary';
import ImageData from '../../interfaces/ImageData';

import TileTypes from '../enums/TileTypes';

class TerrainTile extends Tile {
    public readonly min: TileColorBoundary;
    public readonly max: TileColorBoundary;

    public readonly image: ImageData;

    public readonly zIndex: number;
    public readonly biome: string;
    
    constructor(
        id: number, name: string, type: TileTypes, 
        min: TileColorBoundary, max: TileColorBoundary,
        image: ImageData, zIndex: number, biome: string
    ) {
        super(id, name, type);
        
        this.min = min;
        this.max = max;

        this.image = image;
        this.zIndex = zIndex;

        this.biome = biome;
    }
}

export default TerrainTile;
