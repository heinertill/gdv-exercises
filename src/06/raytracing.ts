import Camera from '../05/camera';
import Sphere from '../05/sphere';
import Intersection from '../05/intersection';
import Vector from '../05/vector';
import Ray from '../05/ray';
import { phong } from './phong';

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
export function raytracePhong(data: Uint8ClampedArray,
                              camera: Camera,
                              spheres: Array<Sphere>,
                              lightPositions: Array<Vector>,
                              shininess: number,
                              x: number, y: number,
                              width: number, height: number) {

    // TODO: Create ray from camera through image plane at position (x, y).
    // TODO: Compute closest intersection with spheres in the scene.
    // TODO: Compute emission at point of intersection using phong model.
    // TODO: Set pixel color accordingly.

    let low: number = 64000;
    let sphere: Sphere = null;
    let inter: Intersection;
    let ray: Ray = Ray.makeRay(x, y, camera);
    for (let i = 0; i < spheres.length; i++) {
        let inter2: Intersection = spheres[i].intersect(ray);
        if (inter2 != null) {
            if (inter2.t < low) {
                low = inter2.t;
                inter = inter2;
                sphere = spheres[i];
            }
        }
    }

    if (sphere != null) {
        let color: Vector = phong(sphere.color, inter, lightPositions, shininess, camera.origin);

        let pos: number = (y*width + x)*4;
        data[pos] = color.r * 255;
        data[pos+1] = color.g * 255;
        data[pos+2] = color.b * 255;
        data[pos+3] = 0xff;

    }

}
