import Camera from './camera';
import Sphere from './sphere';
import Ray from './ray';

/**
 * Compute the color of the pixel (x, y) by raytracing
 * using a given camera and a sphere.
 *
 * @param data The linearised pixel array
 * @param camera The camera used for raytracing
 * @param sphere The sphere to raytrace
 * @param x The x coordinate of the pixel to convert
 * @param y The y coordinate of the pixel to convert
 * @param width The width of the canvas
 * @param height The height of the canvas
 */

export function raytrace(data: Uint8ClampedArray,
                         camera: Camera,
                         sphere: Sphere,
                         x: number, y: number,
                         width: number, height: number) {

    // TODO: Create a ray from the camera's position through the pixel
    // TODO: (x, y) in the camera's image plane, and perform intersection
    // TODO: with the given sphere. Set color of pixel (x, y) in the data
    // TODO: array to black, if the ray hits the sphere.
}
