import BiomeTally from 'types/BiomeTally';

import { NUM_CHUNK_TILES } from '../../config';

// Remove biomes with no entries and normalize the ones that do
// Normalize here means to divide by the number of tiles in a chunk
// so that we get proportions for each biome expressed in the chunk
const processBiomeTally = (biomeTally: BiomeTally) => {
    for (const biomeName of Object.keys(biomeTally)) {
        if (biomeTally[biomeName]) biomeTally[biomeName] /= NUM_CHUNK_TILES;
        else Reflect.deleteProperty(biomeTally, biomeName);
    }
};

export default processBiomeTally;
