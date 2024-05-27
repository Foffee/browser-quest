// Elevation values come from p5's noise function
import { prototype } from 'p5';

const { noise, noiseSeed, noiseDetail } = prototype;
noiseSeed(908546);
noiseDetail(5, 0.5);

// We will use the noise functions from simplex noise for the rest
import { createNoise2D } from 'simplex-noise';
import Alea from 'alea'; // Alea can be used to create seedable random generators

// @ts-ignore
const rndTempFunction = new Alea( 200 );
const noiseTemp = createNoise2D( rndTempFunction );

// @ts-ignore
const rndMoisFunction = new Alea( 7890 );
const noiseMois = createNoise2D( rndMoisFunction );

// @ts-ignore
const rndCaveFunction = new Alea( 50000 );
const noiseCave = createNoise2D( rndCaveFunction );

import minMaxNormalize from '../../utils/minMaxNormalize';

import TileList from '../TileList';
const TileListValues = Object.values( TileList ).slice(1); // skip "Air" tile

import TerrainTileData from '../../interfaces/terrain/TerrainTileData';
import ChunkTileData from '../../interfaces/terrain/TerrainChunkTileData';

import TileTypes from '../enums/TileTypes';

// The bigger the scales, the less the frequency of the noises
// This makes a value persist longer
const ALTITUDE_NOISE_SCALE = 50;
const TEMPERATURE_NOISE_SCALE = 50;
const MOISTURE_NOISE_SCALE = 50;
const CAVE_NOISE_SCALE = 50;

// Selects the correct terrain tile depending on the given properties
// Note: Bordered tiles are immediately skipped
const selectTerrainTile = (tile: TerrainTileData, elevation: number, temperature: number, moisture: number) => {
    return (tile.id === ~~tile.id)
        && (tile.min.height <= elevation && elevation <= tile.max.height)
        && (tile.min.temperature <= temperature && temperature <= tile.max.temperature)
        && (tile.min.moisture <= moisture && moisture <= tile.max.moisture);
};

// Creates a noise function that returns values in the range of [ 0, 1 ] with
// the given scale and octave numbers
// See this link for more info: https://www.redblobgames.com/maps/terrain-from-noise/
const getNoiseFunc = (noise: (x: number, y: number) => number, scale: number, octaves: number) => {
    return (x: number, y: number) => {
        let accumulatedNoise = 0;
        let amplitude = 1;
        let sumAmplitudes = 0;
    
        for (let o = 0; o < octaves; o++) {
            accumulatedNoise += 1/amplitude * 
                minMaxNormalize(noise( amplitude * (x / scale), amplitude * (y / scale) ), -1, 1);
            
            sumAmplitudes += 1 / amplitude;
            amplitude *= 2;
        }
    
        return accumulatedNoise / sumAmplitudes;
    };
};

// Create noise functions for the temperature and moisture
const simplexTemp = getNoiseFunc( noiseTemp, TEMPERATURE_NOISE_SCALE, 6 );
const simplexMois = getNoiseFunc( noiseMois, MOISTURE_NOISE_SCALE, 6 );
const simplexCave = getNoiseFunc( noiseCave, CAVE_NOISE_SCALE, 6 );

// Gets the terrain value at (x, y)
const TerrainValue = (x: number, y: number): ChunkTileData => {
    // Compute the elevation, temperature, moisture at (x, y) 
    const elevation = noise( x / ALTITUDE_NOISE_SCALE + 10000, y / ALTITUDE_NOISE_SCALE + 10000 );
    const temperature = simplexTemp( x / TEMPERATURE_NOISE_SCALE + 5436, y / TEMPERATURE_NOISE_SCALE + 5436 );
    const moisture = simplexMois( x / MOISTURE_NOISE_SCALE + 123, y / MOISTURE_NOISE_SCALE + 123 );
    const cave = simplexCave( x / CAVE_NOISE_SCALE + 500, y / CAVE_NOISE_SCALE + 500 );

    // Find the tile that corresponds to that elevation
    const tile = TileListValues.find(t => {
        if (t.type !== TileTypes.TERRAIN) return false;
        return selectTerrainTile(t as TerrainTileData, elevation, temperature, moisture);
    }) as TerrainTileData;

    // An error thrown here means that there some boundary condition wasn't met by any tile
    if (!tile) throw new Error(`ERROR: Tile at (${x}, ${y}) couldn't be retrieved!!! E=${elevation}, T=${temperature}, M=${moisture}`);
    
    return { 
        height: elevation, 
        temperature,
        moisture,
        tile, 
        borders: { NW: null, N: null, NE: null, W: null, E: null, SW: null, S: null, SE: null }
    };
};

export default TerrainValue;
