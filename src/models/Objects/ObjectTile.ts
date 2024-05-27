import Tile from '../Tile';

import ImageData from '../../interfaces/ImageData';

import TileTypes from '../enums/TileTypes';

class ObjectTile extends Tile {
    public readonly image: ImageData;

    public readonly bbPosition: number[];
    public readonly bbDimensions: number[];
    
    constructor(
        id: number, name: string, type: TileTypes, 
        image: ImageData, bbPosition: number[], bbDimensions: number[]
    ) {
        super(id, name, type);
    
        this.image = image;
        this.bbPosition = bbPosition;
        this.bbDimensions = bbDimensions;
    }
}

export default ObjectTile;