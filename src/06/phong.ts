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

    // ambient
    let ambient: Vector = color.mul(kA);

    // diffuse
    let diff: Vector = new Vector(0,0,0,0);
    for (let i = 0; i < lightPositions.length; i++) {
        let s: Vector = (lightPositions[i].sub(intersection.point)).normalize();
        let winkel: number = Math.max(s.dot(intersection.normal), 0);
        diff = diff.add(lightColor.mul(winkel));
    }
    diff = diff.mul(kD);

    // Specular

    let spec: Vector = new Vector(0,0,0,0);
    for (let i = 0; i < lightPositions.length; i++) {
        let s: Vector = (lightPositions[i].sub(intersection.point)).normalize();

        // r berechnen
        let r = (intersection.normal.mul(2 * intersection.normal.dot(s)).sub(s)).normalize();

        // vector to viewer
        let v: Vector = (cameraPosition.sub(intersection.point)).normalize();

        let max: number = Math.pow(Math.max(r.dot(v), 0), shininess);
        spec = spec.add(lightColor.mul(max));
    }
    spec = spec.mul(kS);

    let res: Vector = ambient.add(diff).add(spec);
    let final: Vector = new Vector(0,0,0,0);
    final.r = res.r;
    final.g = res.g;
    final.b = res.b;

    return final;
}
