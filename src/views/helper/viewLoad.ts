const load = (canvasId: string, canvasName: string) => {
    // Get the associated canvas and its context from the DOM
    const canvas = document.getElementById( canvasId ) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    // If we successfully got the context, return it, otherwise an error is thrown!
    if (ctx) return ctx;
    else throw new Error(`ERROR: Could not get context of ${ canvasName } canvas!!!`);
};

export default load;
