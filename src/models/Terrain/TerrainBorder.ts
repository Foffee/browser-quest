import TileList from '../TileList';
const TileListValues = Object.values( TileList ).slice(1); // skip "Air" tile

import TerrainTileData from '../../interfaces/terrain/TerrainTileData';

const TerrainBorder = (tileId: number, borderNumber: number) => {
    // `tileId.borderNumber` is the id of the tile we want to find
    const desiredId = `${tileId}.${borderNumber}`;

    // In the search, we skip over tiles whose integer part of the id doesn't match tileId's
    return (TileListValues.find(v => tileId === ~~v.id && v.id.toString() === desiredId) as TerrainTileData) || null;
};

export default TerrainBorder;
