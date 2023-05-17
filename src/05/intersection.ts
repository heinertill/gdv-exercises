import Vector from './vector';

/**
 * Class representing a ray-sphere intersection in 3D space
 */
export default class Intersection {

    public t: number;
    public point: Vector;
    public normal: Vector;

    /**
     * Create an Intersection
     * @param t The distance on the ray
     * @param point The intersection point
     * @param normal The normal of the surface at the point of intersection
     */
    constructor(t: number = Infinity,
                point: Vector = null,
                normal: Vector = null) {

        this.t = t;
        this.point = point;
        this.normal = normal;
    }

    /**
     * Determines whether this intersection
     * is closer than the other
     * @param other The other Intersection
     * @return The result
     */
    closerThan(other: Intersection): boolean {
        if (this.t < other.t)
            return true;
        else
            return false;
    }
}
