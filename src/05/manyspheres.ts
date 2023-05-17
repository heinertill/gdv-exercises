import Camera from './camera';
import Sphere from './sphere';
import Intersection from './intersection';
import Vector from './vector';
import Ray from './ray';

/**
 * Compute the color of the pixel (x, y) by raytracing
 * using a given camera and multiple spheres.
 *
 * @param data The linearised pixel array
 * @param camera The camera used for raytracing
 * @param spheres The spheres to raytrace
 * @param x The x coordinate of the pixel to convert
 * @param y The y coordinate of the pixel to convert
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function raytrace(data: Uint8ClampedArray,
                         camera: Camera,
                         spheres: Array<Sphere>,
                         x: number, y: number,
                         width: number, height: number) {

    // TODO: Generate ray and perform intersection with every sphere.
    // TODO: On intersection set pixel color to color of the sphere
    // TODO: containing the closest intersection point.
}
