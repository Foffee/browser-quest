import Biomes from '../Objects/Biomes';

import BiomeTally from 'types/BiomeTally';

const createBiomeTally = (() => {
    const biomeNames = Object.keys( Biomes );
    const lenObj = { length: biomeNames.length };

    return (): BiomeTally => {
        return Object
            .fromEntries(Array.from(lenObj, (_, i) => [ biomeNames[i], 0 ]));
    };
})();

export default createBiomeTally;
