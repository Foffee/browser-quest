import Tile from '../Tile';
import TerrainTile from '../Terrain/TerrainTile';
import ObjectTile from '../Objects/ObjectTile';

import TileData from 'interfaces/tile/TileData';
import TerrainTileData from 'interfaces/terrain/TerrainTileData';
import ObjectTileData from 'interfaces/objects/ObjectTileData';

import TileTypes from '../enums/TileTypes';

const createTile = (tileData: TileData | TerrainTileData | ObjectTileData) => {
    // All tiles have these two
    const { id, name, type } = tileData;

    switch (tileData.type) {
        case TileTypes.AIR:
            return new Tile( id, name, type );
        case TileTypes.TERRAIN:
            const { min, max, image: tImage, zIndex, biome } = tileData as TerrainTileData;
            return new TerrainTile( id, name, type, min, max, tImage, zIndex, biome );
        case TileTypes.OBJECT:
            const { image: oImage, bbPosition, bbDimensions } = tileData as ObjectTileData;
            return new ObjectTile( id, name, type, oImage, bbPosition, bbDimensions );
        default:
            throw new Error(`ERROR: Could not create tile with parameters NAME=${name}, ID=${id}, TYPE=${type}`);
    }
};

export default createTile;
