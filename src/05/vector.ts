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
    }

    /**
     * Returns the x component of the vector
     * @return The x component of the vector
     */
    get x(): number {
        // TODO: Return actual value
        return null;
    }

    /**
     * Sets the x component of the vector to val
     * @param val - The new value
     */
    set x(val: number) {
        // TODO: Set actual value
    }

    /**
     * Returns the first component of the vector
     * @return The first component of the vector
     */
    get r(): number {
        // TODO: Return actual value
        return null;
    }

    /**
     * Sets the first component of the vector to val
     * @param val The new value
     */
    set r(val: number) {
        // TODO: Set actual value
    }

    /**
     * Returns the y component of the vector
     * @return The y component of the vector
     */
    get y(): number {
        // TODO: Return actual value
        return null;
    }

    /**
     * Sets the y component of the vector to val
     * @param val The new value
     */
    set y(val: number) {
        // TODO: Set actual value
    }

    /**
     * Returns the second component of the vector
     * @return The second component of the vector
     */
    get g(): number {
        // TODO: Return actual value
        return null;
    }

    /**
     * Sets the second component of the vector to val
     * @param val The new value
     */
    set g(val: number) {
        // TODO: Set actual value
    }

    /**
     * Returns the z component of the vector
     * @return The z component of the vector
     */
    get z(): number {
        // TODO: Return actual value
        return null;
    }

    /**
     * Sets the z component of the vector to val
     * @param val The new value
     */
    set z(val: number) {
        // TODO: Set actual value
    }

    /**
     * Returns the third component of the vector
     * @return The third component of the vector
     */
    get b(): number {
        // TODO: Return actual value
        return null;
    }

    /**
     * Sets the third component of the vector to val
     * @param val The new value
     */
    set b(val: number) {
        // TODO: Set actual value
    }

    /**
     * Returns the w component of the vector
     * @return The w component of the vector
     */
    get w(): number {
        // TODO: Return actual value
        return null;
    }

    /**
     * Sets the w component of the vector to val
     * @param val The new value
     */
    set w(val: number) {
        // TODO: Set actual value
    }

    /**
     * Returns the fourth component of the vector
     * @return The fourth component of the vector
     */
    get a(): number {
        // TODO: Return actual value
        return null;
    }

    /**
     * Sets the fourth component of the vector to val
     * @param val The new value
     */
    set a(val: number) {
        // TODO: Set actual value
    }

    /**
     * Creates a new vector with the vector added
     * @param other The vector to add
     * @return The new vector;
     */
    add(other: Vector): Vector {
        // TODO: Return new vector with result
        return null;
    }

    /**
     * Creates a new vector with the vector subtracted
     * @param other The vector to subtract
     * @return The new vector
     */
    sub(other: Vector): Vector {
        // TODO: Return new vector with result
        return null;
    }

    /**
     * Creates a new vector with the scalar multiplied
     * @param other The scalar to multiply
     * @return The new vector
     */
    mul(other: number): Vector {
        // TODO: Return new vector with result
        return null;
    }

    /**
     * Creates a new vector with the scalar divided
     * @param other The scalar to divide
     * @return The new vector
     */
    div(other: number): Vector {
        // TODO: Return new vector with result
        return null;
    }

    /**
     * Dot product
     * @param other The vector to calculate the dot product with
     * @return The result of the dot product
     */
    dot(other: Vector): number {
        // TODO: Compute and return dot product
        return 0;
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
        return null;
    }

    /**
     * Normalizes this vector in place
     * @returns this vector for easier function chaining
     */
    normalize(): Vector {
        // TODO: Normalize this vector and return it
        return this;
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
        return false;
    }

    /**
     * Calculates the length of the vector
     * @return The length of the vector
     */
    get length(): number {
        // TODO: Calculate and return length
        return 0;
    }

    /**
     * Returns an array representation of the vector
     * @return An array representation.
     */
    valueOf(): [number, number, number, number] {
        return this.data;
    }
}
