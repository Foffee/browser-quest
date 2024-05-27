// converts x from [ a, b ] to z in [ 0, 1 ]
const minMaxNormalize = (x: number, a: number = 0, b: number = 1) => {
    return (x - a) / (b - a);
};

export default minMaxNormalize;
