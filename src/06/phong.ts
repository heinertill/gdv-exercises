import Vector from '../05/vector';
import Intersection from '../05/intersection';

/**
 * Calculate the color of an object at the intersection point according to the Phong Lighting model.
 * @param color The color of the intersected object
 * @param intersection The intersection information
 * @param lightPositions The light positions
 * @param shininess The shininess parameter of the Phong model
 * @param cameraPosition The position of the camera
 * @return The resulting color
 */
export function phong(
    color: Vector,
    intersection: Intersection,
    lightPositions: Array<Vector>,
    shininess: number,
    cameraPosition: Vector
): Vector {

    const lightColor = new Vector(0.8, 0.8, 0.8, 0);
    const kA = 1.0;
    const kD = 0.5;
    const kS = 0.5;

    // TODO: Compute light intensity according to phong reflection model.
    // TODO: Compute diffuse lighting using light color, diffuse
    // TODO: reflectivity, light positions and an intersection point.
    // TODO: Compute specular reflection using light color, specular
    // TODO: reflectivity, shininess, light positions, an intersection
    // TODO: point, and eye (camera) position.
    // TODO: Return complete phong emission using object color, ambient,
    // TODO: diffuse and specular terms.
    return color;
}
