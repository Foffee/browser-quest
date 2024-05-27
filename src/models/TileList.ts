import createTile from './helper/createTile';

import TileTypes from './enums/TileTypes';

import TileData from '../interfaces/tile/TileData';
import TerrainTileData from '../interfaces/terrain/TerrainTileData';
import ObjectTileData from '../interfaces/objects/ObjectTileData';

import TileListType from '../types/TileListType';

import Images from './ImageLoader';

import { TILE_SIZE } from '../config';

const tileData: (TileData | TerrainTileData | ObjectTileData)[] = [
    {
        id: 0,
        name: 'Air',
        type: TileTypes.AIR
    },
    {
        id: 2,
        name: 'Lakes',
        min: { height: 0.0, temperature: 0.0, moisture: 0.9, color: '#45ADA8' },
        max: { height: 1.0, temperature: 1.0, moisture: 1.0, color: '#45ADA8' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 0, 
            sy: 0,
            sw: 0,
            sh: 0,
            dx: (x: number) => 0,
            dy: (y: number) => 0,
            dw: 0,
            dh: 0 
        },
        zIndex: 0,
        biome: 'LAKES'
    }, 
    {
        id: 3,
        name: 'Snow',
        min: { height: 0.0, temperature: 0.0, moisture: 0.0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 0.1, moisture: 0.9, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 0, 
            sy: 0,
            sw: 0,
            sh: 0,
            dx: (x: number) => 0,
            dy: (y: number) => 0,
            dw: 0,
            dh: 0 
        },
        zIndex: 1,
        biome: 'SNOW'
    },  
    {
        id: 4,
        name: 'Sea Water',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 192, 
            sy: 224,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    {
        id: 4.1,
        name: 'Sea Water (NW)',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 161, 
            sy: 0,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE + 12,
            dw: 32,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    {
        id: 4.2,
        name: 'Sea Water (N)',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 192, 
            sy: 0,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    {
        id: 4.3,
        name: 'Sea Water (NE)',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 224, 
            sy: 0,
            sw: 31,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE + 12,
            dw: 31,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    {
        id: 4.4,
        name: 'Sea Water (W)',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 161, 
            sy: 32,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    {
        id: 4.5,
        name: 'Sea Water (E)',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 224, 
            sy: 32,
            sw: 31,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 31,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    {
        id: 4.6,
        name: 'Sea Water (SW)',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 160, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    {
        id: 4.7,
        name: 'Sea Water (S)',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 192, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    {
        id: 4.8,
        name: 'Sea Water (SE)',
        min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
        max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 224, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 1,
        biome: 'SEA'
    },
    // {
    //     id: 4,
    //     name: 'Sea Water',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 192, 
    //         sy: 224,
    //         sw: 32,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => y * TILE_SIZE,
    //         dw: 32,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    // {
    //     id: 4.1,
    //     name: 'Sea Water (NW)',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 161, 
    //         sy: 192,
    //         sw: 32,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => y * TILE_SIZE + 12,
    //         dw: 32,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    // {
    //     id: 4.2,
    //     name: 'Sea Water (N)',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 192, 
    //         sy: 192,
    //         sw: 32,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => (y + 0.5) * TILE_SIZE,
    //         dw: 32,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    // {
    //     id: 4.3,
    //     name: 'Sea Water (NE)',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 224, 
    //         sy: 192,
    //         sw: 31,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => y * TILE_SIZE + 12,
    //         dw: 31,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    // {
    //     id: 4.4,
    //     name: 'Sea Water (W)',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 161, 
    //         sy: 224,
    //         sw: 32,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => y * TILE_SIZE,
    //         dw: 32,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    // {
    //     id: 4.5,
    //     name: 'Sea Water (E)',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 224, 
    //         sy: 224,
    //         sw: 31,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => y * TILE_SIZE,
    //         dw: 31,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    // {
    //     id: 4.6,
    //     name: 'Sea Water (SW)',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 160, 
    //         sy: 256,
    //         sw: 32,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => y * TILE_SIZE,
    //         dw: 32,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    // {
    //     id: 4.7,
    //     name: 'Sea Water (S)',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 192, 
    //         sy: 256,
    //         sw: 32,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => y * TILE_SIZE,
    //         dw: 32,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    // {
    //     id: 4.8,
    //     name: 'Sea Water (SE)',
    //     min: { height: 0.0, temperature: 0, moisture: 0, color: '#1EB0FB' },
    //     max: { height: 0.4, temperature: 1, moisture: 1, color: '#118AB2' },
    //     type: TileTypes.TERRAIN,
    //     image: {
    //         src: Images.Terrain,
    //         sx: 224, 
    //         sy: 256,
    //         sw: 32,
    //         sh: 32,
    //         dx: (x: number) => x * TILE_SIZE,
    //         dy: (y: number) => y * TILE_SIZE,
    //         dw: 32,
    //         dh: 32 
    //     },
    //     zIndex: 1
    // },
    {
        id: 5,
        name: 'Beach Sand',
        min: { height: 0.4, temperature: 0.0, moisture: 0.0, color: '#FFD166' },
        max: { height: 0.5, temperature: 1.0, moisture: 1.0, color: '#FFD166' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 191, 
            sy: 405,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 2,
        biome: 'BEACH'
    },
    {
        id: 5.2,
        name: 'Beach Sand (N)',
        min: { height: 0.4, temperature: 0.0, moisture: 0.0, color: '#FFD166' },
        max: { height: 0.5, temperature: 1.0, moisture: 1.0, color: '#FFD166' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 192, 
            sy: 262,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE + 32,
            dw: 32,
            dh: 32 
        },
        zIndex: 2,
        biome: 'BEACH'
    },
    {
        id: 5.4,
        name: 'Beach Sand (W)',
        min: { height: 0.4, temperature: 0.0, moisture: 0.0, color: '#FFD166' },
        max: { height: 0.5, temperature: 1.0, moisture: 1.0, color: '#FFD166' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 224, 
            sy: 220,
            sw: 31,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE + 16,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 2,
        biome: 'BEACH'
    },
    {
        id: 5.5,
        name: 'Beach Sand (E)',
        min: { height: 0.4, temperature: 0.0, moisture: 0.0, color: '#FFD166' },
        max: { height: 0.5, temperature: 1.0, moisture: 1.0, color: '#FFD166' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 161, 
            sy: 220,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE - 16,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 2,
        biome: 'BEACH'
    },
    {
        id: 5.7,
        name: 'Beach Sand (S)',
        min: { height: 0.4, temperature: 0.0, moisture: 0.0, color: '#FFD166' },
        max: { height: 0.5, temperature: 1.0, moisture: 1.0, color: '#FFD166' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 192, 
            sy: 190,
            sw: 34,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE - 16,
            dw: 24,
            dh: 32 
        },
        zIndex: 2,
        biome: 'BEACH'
    },
    {
        id: 6,
        name: 'Plains Grass',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 32, 
            sy: 320,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 6.1,
        name: 'Plains Grass (NW)',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 10,
            sy: 296,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 6.2,
        name: 'Plains Grass (N)',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 32, 
            sy: 296,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 6.3,
        name: 'Plains Grass (NE)',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 54,
            sy: 296,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 6.4,
        name: 'Plains Grass (W)',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 8,
            sy: 320,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 6.5,
        name: 'Plains Grass (E)',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 54,
            sy: 320,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 6.6,
        name: 'Plains Grass (SW)',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 10,
            sy: 344,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 6.7,
        name: 'Plains Grass (S)',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 32,
            sy: 344,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 6.8,
        name: 'Plains Grass (SE)',
        min: { height: 0.5, temperature: 0.2, moisture: 0.0, color: '#A7C957' },
        max: { height: 0.7, temperature: 0.4, moisture: 0.9, color: '#A7C957' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 48,
            sy: 344,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'PLAINS'
    },
    {
        id: 7,
        name: 'Desert Sand',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 32, 
            sy: 96,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 7.1,
        name: 'Desert Sand (NW)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 0, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 7.2,
        name: 'Desert Sand (N)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 32, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 7.3,
        name: 'Desert Sand (NE)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 64, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 7.4,
        name: 'Desert Sand (W)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 0, 
            sy: 96,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 7.5,
        name: 'Desert Sand (E)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 64, 
            sy: 96,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 7.6,
        name: 'Desert Sand (SW)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 0, 
            sy: 128,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 7.7,
        name: 'Desert Sand (S)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 32, 
            sy: 128,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 7.8,
        name: 'Desert Sand (SE)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.0, color: '#F4A460' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.5, color: '#F4A460' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Sand,
            sx: 64, 
            sy: 128,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 3,
        biome: 'DESERT'
    },
    {
        id: 8,
        name: 'Jungle Grass',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 32, 
            sy: 32,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },  
    {
        id: 8.1,
        name: 'Jungle Grass (NW)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 10,
            sy: 8,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },
    {
        id: 8.2,
        name: 'Jungle Grass (N)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 32, 
            sy: 8,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },
    {
        id: 8.3,
        name: 'Jungle Grass (NE)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 54,
            sy: 8,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => (y + 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },
    {
        id: 8.4,
        name: 'Jungle Grass (W)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 8,
            sy: 32,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },
    {
        id: 8.5,
        name: 'Jungle Grass (E)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 54,
            sy: 32,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },
    {
        id: 8.6,
        name: 'Jungle Grass (SW)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 10,
            sy: 56,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x + 0.5) * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },
    {
        id: 8.7,
        name: 'Jungle Grass (S)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 32,
            sy: 56,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },
    {
        id: 8.8,
        name: 'Jungle Grass (SE)',
        min: { height: 0.5, temperature: 0.4, moisture: 0.5, color: '#3A9C1B' },
        max: { height: 0.7, temperature: 1.0, moisture: 0.9, color: '#3A9C1B' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 48,
            sy: 56,
            sw: 32,
            sh: 32,
            dx: (x: number) => (x - 0.5) * TILE_SIZE,
            dy: (y: number) => (y - 0.5) * TILE_SIZE,
            dw: 32,
            dh: 32
        },
        zIndex: 4,
        biome: 'JUNGLE'
    },
    {
        id: 9,
        name: 'Taiga',
        min: { height: 0.5, temperature: 0.1, moisture: 0.0, color: '#35A968' },
        max: { height: 0.7, temperature: 0.2, moisture: 0.9, color: '#35A968' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.Terrain,
            sx: 0, 
            sy: 0,
            sw: 0,
            sh: 0,
            dx: (x: number) => 0,
            dy: (y: number) => 0,
            dw: 0,
            dh: 0 
        },
        zIndex: 3,
        biome: 'TAIGA'
    },  
    {
        id: 10,
        name: 'Mountain Rock Low',
        min: { height: 0.7, temperature: 0, moisture: 0, color: '#073B4C' },
        max: { height: 0.75, temperature: 1, moisture: 1, color: '#073B4C' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 32, 
            sy: 32,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 2,
        biome: 'MOUNTAIN'
    },
    {
        id: 11,
        name: 'Mountain Rock High',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 32, 
            sy: 32,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 11.1,
        name: 'Mountain Rock High (NW)',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 0, 
            sy: 0,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 11.2,
        name: 'Mountain Rock High (N)',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 32, 
            sy: 0,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 11.3,
        name: 'Mountain Rock High (NE)',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 64, 
            sy: 0,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 11.4,
        name: 'Mountain Rock High (W)',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 0, 
            sy: 32,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 11.5,
        name: 'Mountain Rock High (E)',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 64, 
            sy: 32,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 11.6,
        name: 'Mountain Rock High (SW)',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 0, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 11.7,
        name: 'Mountain Rock High (S)',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 32, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 11.8,
        name: 'Mountain Rock High (SE)',
        min: { height: 0.75, temperature: 0, moisture: 0, color: '#406A7D' },
        max: { height: 0.8, temperature: 1, moisture: 1, color: '#406A7D' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.WaterFall,
            sx: 64, 
            sy: 64,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 3,
        biome: 'MOUNTAIN'
    },
    {
        id: 12,
        name: 'Mountain Snow',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 160, 
            sy: 64,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 12.1,
        name: 'Mountain Snow (NW)',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 144, 
            sy: 48,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 12.2,
        name: 'Mountain Snow (N)',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 160, 
            sy: 48,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 12.3,
        name: 'Mountain Snow (NW)',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 176, 
            sy: 48,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 12.4,
        name: 'Mountain Snow (W)',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 176, 
            sy: 16,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 12.5,
        name: 'Mountain Snow (E)',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 145, 
            sy: 16,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 12.6,
        name: 'Mountain Snow (SW)',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 144, 
            sy: 80,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 12.7,
        name: 'Mountain Snow (S)',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 160, 
            sy: 0,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 12.8,
        name: 'Mountain Snow (SE)',
        min: { height: 0.8, temperature: 0, moisture: 0, color: '#FFFFFF' },
        max: { height: 1.0, temperature: 1, moisture: 1, color: '#FFFFFF' },
        type: TileTypes.TERRAIN,
        image: {
            src: Images.TerrainExtra,
            sx: 176, 
            sy: 80,
            sw: 16,
            sh: 16,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        zIndex: 4,
        biome: 'MOUNTAIN'
    },
    {
        id: 1000,
        name: 'Oak Tree (Variant 1)',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Plants,
            sx: 33, 
            sy: 0,
            sw: 96,
            sh: 128,
            dx: (x: number) => x * TILE_SIZE - 32,
            dy: (y: number) => y * TILE_SIZE - 90,
            dw: 96,
            dh: 128 
        },
        bbPosition: [ -16, -16 ],
        bbDimensions: [ 32, 28 ],
    },
    {
        id: 1001,
        name: 'Oak Tree (Variant 2)',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Plants,
            sx: 127, 
            sy: 0,
            sw: 96,
            sh: 128,
            dx: (x: number) => x * TILE_SIZE - 32,
            dy: (y: number) => y * TILE_SIZE - 90,
            dw: 96,
            dh: 128 
        },
        bbPosition: [ -20, -16 ],
        bbDimensions: [ 46, 28 ],
    },
    {
        id: 1002,
        name: 'Rock (Variant 1)',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Plants,
            sx: 289, 
            sy: 36,
            sw: 32,
            sh: 26,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE + 3,
            dw: 32,
            dh: 26 
        },
        bbPosition: [ -15, -14 ],
        bbDimensions: [ 30, 28 ],
    },
    {
        id: 1003,
        name: 'Rock (Variant 2)',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Beach,
            sx: 35, 
            sy: 102,
            sw: 26,
            sh: 22,
            dx: (x: number) => x * TILE_SIZE + 3,
            dy: (y: number) => y * TILE_SIZE + 5,
            dw: 26,
            dh: 22 
        },
        bbPosition: [ -13, -11 ],
        bbDimensions: [ 26, 22 ],
    },
    {
        id: 1004,
        name: 'Rock (Variant 3)',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Beach,
            sx: 67, 
            sy: 102,
            sw: 26,
            sh: 22,
            dx: (x: number) => x * TILE_SIZE + 3,
            dy: (y: number) => y * TILE_SIZE + 5,
            dw: 26,
            dh: 22 
        },
        bbPosition: [ -13, -11 ],
        bbDimensions: [ 26, 22 ],
    },
    {
        id: 1005,
        name: 'Log',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Plants,
            sx: 384, 
            sy: 31,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        bbPosition: [ -16, -16 ],
        bbDimensions: [ 32, 32 ],
    },
    {
        id: 1006,
        name: 'Oak Trunk',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Plants,
            sx: 256, 
            sy: 41,
            sw: 32,
            sh: 22,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE + 4,
            dw: 32,
            dh: 22 
        },
        bbPosition: [ -16, -14 ],
        bbDimensions: [ 32, 26 ],
    },
    {
        id: 1007,
        name: 'Dandelions (Variant 1)',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Plants,
            sx: 384, 
            sy: 63,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        bbPosition: [ -16, -16 ],
        bbDimensions: [ 32, 32 ],
    },
    {
        id: 1008,
        name: 'Dandelions (Variant 2)',
        type: TileTypes.OBJECT,
        image: {
            src: Images.Plants,
            sx: 384, 
            sy: 95,
            sw: 32,
            sh: 32,
            dx: (x: number) => x * TILE_SIZE,
            dy: (y: number) => y * TILE_SIZE,
            dw: 32,
            dh: 32 
        },
        bbPosition: [ -16, -16 ],
        bbDimensions: [ 32, 32 ],
    },
];

const TileList: TileListType = tileData.reduce((acc, cur) => {
    // Add tile to list
    acc[cur.id] = createTile( cur );
    return acc;
}, {} as TileListType);

export default TileList;
