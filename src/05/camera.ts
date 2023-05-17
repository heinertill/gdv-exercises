import Vector from '../05/vector';

/**
 * A class representing a camera
 */
export default class Camera {

    public width: number;
    public height: number;
    public alpha: number;
    public origin: Vector;

    /**
     * Creates a new camera with an image canvas, a field of view, and a position in world space.
     * For now, the camera is always viewing along the negative z-axis.
     * @param width The width of the canvas
     * @param height The height of the canvas
     * @param alpha The field of view in X dimension of the camera
     * @param origin The origin of the camera in world coordinates
     */
    constructor(
        width: number,
        height: number,
        alpha: number,
        origin: Vector = new Vector(0, 0, 0, 1)
    ) {
        this.width = width;
        this.height = height;
        this.alpha = alpha;
        this.origin = origin;
    }
}
