import TileList from '../TileList';
import ObjectTile from './ObjectTile';

import BiomeData from '/interfaces/objects/BiomeData';

const Biomes: { [key: string]: BiomeData } = {
    LAKES: {
        terrainTiles: [ 2 ],
        objects: {}
    },

    SNOW: {
        terrainTiles: [ 3 ],
        objects: {}
    },

    SEA: { 
        terrainTiles: [ 4 ],
        objects: {}
    },

    BEACH: {
        terrainTiles: [ 5 ],
        objects: {
            1002: {
                density: 0.05,
                object: TileList[1002] as ObjectTile,
                above: [ 5, 6 ]
            },
            1003: {
                density: 0.05,
                object: TileList[1003] as ObjectTile,
                above: [ 5, 6 ]
            },
            1004: {
                density: 0.05,
                object: TileList[1004] as ObjectTile,
                above: [ 5, 6 ]
            },
        }
    },

    PLAINS: {
        terrainTiles: [ 6 ],
        objects: {
            1000: {
                density: 0.1,
                object: TileList[1000] as ObjectTile,
                above: [ 6 ]
            },
            1001: {
                density: 0.1,
                object: TileList[1001] as ObjectTile,
                above: [ 6 ]
            },
            1002: {
                density: 0.05,
                object: TileList[1002] as ObjectTile,
                above: [ 5, 6 ]
            },
            1003: {
                density: 0.05,
                object: TileList[1003] as ObjectTile,
                above: [ 5, 6 ]
            },
            1004: {
                density: 0.05,
                object: TileList[1004] as ObjectTile,
                above: [ 5, 6 ]
            },
            1005: {
                density: 0.1,
                object: TileList[1005] as ObjectTile,
                above: [ 6 ]
            },
            1006: {
                density: 0.1,
                object: TileList[1006] as ObjectTile,
                above: [ 6 ]
            },
            1007: {
                density: 0.1,
                object: TileList[1007] as ObjectTile,
                above: [ 6 ]
            },
            1008: {
                density: 0.1,
                object: TileList[1008] as ObjectTile,
                above: [ 6 ]
            }
        }
    },

    DESERT: {
        terrainTiles: [ 7 ],
        objects: {}
    },

    JUNGLE: {
        terrainTiles: [ 8 ],
        objects: {}
    },

    TAIGA: {
        terrainTiles: [ 9 ],
        objects: {}
    },

    MOUNTAIN: {
        terrainTiles: [ 10, 11, 12 ],
        objects: {}
    }
};

export default Biomes;
