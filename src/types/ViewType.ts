import RenderData from '../interfaces/RenderData';

// All views will have these properties and methods
type ViewType = {
    ctx: CanvasRenderingContext2D | null;
    load: () => void;
    render: (data: RenderData) => void;
    resize: (width: number, height: number) => void;
}

export default ViewType;
