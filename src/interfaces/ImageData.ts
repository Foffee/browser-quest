interface ImageData {
    src: HTMLImageElement;

    sx: number;
    sy: number;
    sw: number;
    sh: number;

    dx: (x: number) => number;
    dy: (y: number) => number;
    dw: number;
    dh: number;
}

export default ImageData;
