/**
 * Class representing a vector in 4D space
 */
export default class Vector {
    /**
     * The variable to hold the vector data
     */
    data: [number, number, number, number];

    /**
     * Create a vector
     * @param x The x component
     * @param y The y component
     * @param z The z component
     * @param w The w component
     */
    constructor(x: number, y: number, z: number, w: number) {
        // TODO: Set the data member components to the given values
        this.data = [x, y, z, w];
    }

    /**
     * Returns the x component of the vector
     * @return The x component of the vector
     */
    get x(): number {
        // TODO: Return actual value
        return this.data[0];
    }

    /**
     * Sets the x component of the vector to val
     * @param val - The new value
     */
    set x(val: number) {
        // TODO: Set actual value
        this.data[0] = val;
    }

    /**
     * Returns the first component of the vector
     * @return The first component of the vector
     */
    get r(): number {
        // TODO: Return actual value
        return this.data[0];
    }

    /**
     * Sets the first component of the vector to val
     * @param val The new value
     */
    set r(val: number) {
        // TODO: Set actual value
        this.data[0] = val;
    }

    /**
     * Returns the y component of the vector
     * @return The y component of the vector
     */
    get y(): number {
        // TODO: Return actual value
        return this.data[1];
    }

    /**
     * Sets the y component of the vector to val
     * @param val The new value
     */
    set y(val: number) {
        // TODO: Set actual value
        this.data[1] = val;
    }

    /**
     * Returns the second component of the vector
     * @return The second component of the vector
     */
    get g(): number {
        // TODO: Return actual value
        return this.data[1];
    }

    /**
     * Sets the second component of the vector to val
     * @param val The new value
     */
    set g(val: number) {
        // TODO: Set actual value
        this.data[1] = val;
    }

    /**
     * Returns the z component of the vector
     * @return The z component of the vector
     */
    get z(): number {
        // TODO: Return actual value
        return this.data[2];
    }

    /**
     * Sets the z component of the vector to val
     * @param val The new value
     */
    set z(val: number) {
        // TODO: Set actual value
        this.data[2] = val;
    }

    /**
     * Returns the third component of the vector
     * @return The third component of the vector
     */
    get b(): number {
        // TODO: Return actual value
        return this.data[2];
    }

    /**
     * Sets the third component of the vector to val
     * @param val The new value
     */
    set b(val: number) {
        // TODO: Set actual value
        this.data[2] = val;
    }

    /**
     * Returns the w component of the vector
     * @return The w component of the vector
     */
    get w(): number {
        // TODO: Return actual value
        return this.data[3];
    }

    /**
     * Sets the w component of the vector to val
     * @param val The new value
     */
    set w(val: number) {
        // TODO: Set actual value
        this.data[3] = val;
    }

    /**
     * Returns the fourth component of the vector
     * @return The fourth component of the vector
     */
    get a(): number {
        // TODO: Return actual value
        return this.data[3];
    }

    /**
     * Sets the fourth component of the vector to val
     * @param val The new value
     */
    set a(val: number) {
        // TODO: Set actual value
        this.data[3] = val;
    }

    /**
     * Creates a new vector with the vector added
     * @param other The vector to add
     * @return The new vector;
     */
    add(other: Vector): Vector {
        // TODO: Return new vector with result
        return new Vector(this.data[0]+other.x, this.data[1]+other.y, this.data[2]+other.z, this.data[3]+other.w);
    }

    /**
     * Creates a new vector with the vector subtracted
     * @param other The vector to subtract
     * @return The new vector
     */
    sub(other: Vector): Vector {
        // TODO: Return new vector with result
        return new Vector(this.data[0]-other.x, this.data[1]-other.y, this.data[2]-other.z, this.data[3]-other.w);
    }

    /**
     * Creates a new vector with the scalar multiplied
     * @param other The scalar to multiply
     * @return The new vector
     */
    mul(other: number): Vector {
        // TODO: Return new vector with result
        return new Vector(this.data[0]*other, this.data[1]*other, this.data[2]*other, this.data[3]*other);
    }

    /**
     * Creates a new vector with the scalar divided
     * @param other The scalar to divide
     * @return The new vector
     */
    div(other: number): Vector {
        // TODO: Return new vector with result
        return new Vector(this.data[0]/other, this.data[1]/other, this.data[2]/other, this.data[3]/other);
    }

    /**
     * Dot product
     * @param other The vector to calculate the dot product with
     * @return The result of the dot product
     */
    dot(other: Vector): number {
        // TODO: Compute and return dot product
        return (this.x * other.x + this.y * other.y + this.z * other.z + this.w * other.w);
    }

    /**
     * Cross product
     * Calculates the cross product using the first three components.
     * @param other The vector to calculate the cross product with
     * @return The result of the cross product as new Vector
     */
    cross(other: Vector): Vector {
        // TODO: Return new vector with result
        // TODO: The fourth component should be set to 0
        return new Vector((this.y*other.z - this.z*other.y), (this.z*other.x - this.x*other.z), (this.x*other.y - this.y*other.x), 0);
    }

    /**
     * Normalizes this vector in place
     * @returns this vector for easier function chaining
     */
    normalize(): Vector {
        // TODO: Normalize this vector and return it
        return this.mul(1/this.length);
    }

    /**
     * Compares the vector to another vector.
     * @param other The vector to compare to.
     * @return True if the vectors carry equal numbers.
     */
    equals(other: Vector): boolean {
        // TODO: Perform comparison and return result
        // TODO: Respect inaccuracies: coordinates within 0.000001 of each other
        // TODO: should be considered equal
        return ((this.x <= other.x + 0.000001 && this.x >= other.x - 0.000001) && (this.y <= other.y + 0.000001 && this.y >= other.y - 0.000001) && (this.z <= other.z + 0.000001 && this.z >= other.z - 0.000001));
    }

    /**
     * Calculates the length of the vector
     * @return The length of the vector
     */
    get length(): number {
        // TODO: Calculate and return length
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }

    /**
     * Returns an array representation of the vector
     * @return An array representation.
     */
    valueOf(): [number, number, number, number] {
        return this.data;
    }
}
