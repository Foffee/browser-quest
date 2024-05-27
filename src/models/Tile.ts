import TileTypes from './enums/TileTypes';

class Tile {
    public readonly id: number;
    public readonly name: string;
    public readonly type: TileTypes;

    constructor(id: number, name: string, type: TileTypes) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    
}

export default Tile;
