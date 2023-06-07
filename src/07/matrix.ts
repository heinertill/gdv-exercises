import Vector from '../05/vector';

/**
 * Class representing a 4x4 Matrix
 */
export default class Matrix {

    /**
     * Data representing the matrix values
     */
    data: Float32Array;

    /**
     * Constructor of the matrix. Expects an array in row-major layout. Saves the data as column major internally.
     * @param mat Matrix values row major
     */
    constructor(mat: Array<number>) {
        this.data = new Float32Array(16);
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                this.data[row * 4 + col] = mat[col * 4 + row];
            }
        }
    }

    /**
     * Returns the values of the matrix in row-major layout.
     * @return The values of the matrix
     */
    getVals(): Array<number> {

        var mat = new Array<number>(16);
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                mat[row * 4 + col] = this.data[col * 4 + row];
            }
        }
        return mat;
    }

    /**
     * Returns the value of the matrix at position row, col
     * @param row The value's row
     * @param col The value's column
     * @return The requested value
     */
    getVal(row: number, col: number): number {
        return this.data[col * 4 + row];
    }

    /**
     * Sets the value of the matrix at position row, col
     * @param row The value's row
     * @param val The value to set to
     * @param col The value's column
     */
    setVal(row: number, col: number, val: number) {
        this.data[col * 4 + row] = val;
    }

    /**
     * Returns a matrix that represents a translation
     * @param translation The translation vector that shall be expressed by the matrix
     * @return The resulting translation matrix
     */
    static translation(translation: Vector): Matrix {

        // TODO: Return a new Matrix that is translated according to the given Vector
        return Matrix.identity();
    }

    /**
     * Returns a matrix that represents a rotation. The rotation axis is either the x, y or z axis (either x, y, z is 1).
     * @param axis The axis to rotate around
     * @param angle The angle to rotate
     * @return The resulting rotation matrix
     */
    static rotation(axis: Vector, angle: number): Matrix {

        // TODO: Return a new rotation matrix, distinguish the different
        // TODO: axis of rotation. You can use the axis vector
        // TODO: (1, 0, 0, 0) to specify the x-axis
        // TODO: (0, 1, 0, 0) to specify the y-axis
        // TODO: (0, 0, 1, 0) to specify the z-axis
        return Matrix.identity();
    }

    /**
     * Returns a matrix that represents a scaling
     * @param scale The amount to scale in each direction
     * @return The resulting scaling matrix
     */
    static scaling(scale: Vector): Matrix {
        // TODO: Return a new scaling Matrix with the scaling components of the Vector scale
        return Matrix.identity();
    }


    /**
     * Returns the identity matrix
     * @return A new identity matrix
     */
    static identity(): Matrix {
        return new Matrix([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    /**
     * Matrix multiplication
     * @param other The matrix to multiply with
     * @return The result of the multiplication this*other
     */
    mul(other: Matrix): Matrix {
        // TODO: Return a new Matrix mat with mat = this * other
        return Matrix.identity();
    }

    /**
     * Matrix-vector multiplication
     * @param other The vector to multiply with
     * @return The result of the multiplication this * other
     */
    mulVec(other: Vector): Vector {
        // TODO: Return a new Vector vec with vec = this * other
        return new Vector(0, 0, 0, 0);
    }

    /**
     * Returns the transpose of this matrix
     * @return A new matrix that is the transposed of this
     */
    transpose(): Matrix {
        // TODO: Return a new matrix that is the transposed of this
        return Matrix.identity();
    }

    /**
     * Constructs a lookat matrix
     * @param eye The position of the viewer
     * @param center The position to look at
     * @param up The up direction
     * @return The resulting lookat matrix
     */
    static lookat(eye: Vector, center: Vector, up: Vector): Matrix {
        // TODO: Return a new lookat Matrix
        return Matrix.identity();
    }

    /**
     * Constructs a new matrix that represents a projection normalisation transformation
     * @param left Camera-space left value of lower near point
     * @param right Camera-space right value of upper right far point
     * @param bottom Camera-space bottom value of lower lower near point
     * @param top Camera-space top value of upper right far point
     * @param near Camera-space near value of lower lower near point
     * @param far Camera-space far value of upper right far point
     * @return The rotation matrix
     */
    static frustum(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix {
        // TODO: Return a new frustum Matrix
        return Matrix.identity();
    }

    /**
     * Constructs a new matrix that represents a projection normalisation transformation.
     * @param fovy Field of view in y-direction
     * @param aspect Aspect ratio between width and height
     * @param near Camera-space distance to near plane
     * @param far Camera-space distance to far plane
     * @return The resulting matrix
     */
    static perspective(fovy: number, aspect: number, near: number, far: number): Matrix {
        // TODO: Return a new perspective Matrix, possibly reuse
        // TODO: Matrix.frustum
        return Matrix.identity();
    }

    /**
     * Debug print to console
     */
    print() {
        for (let row = 0; row < 4; row++) {
            console.log("> " + this.getVal(row, 0) +
                        "\t" + this.getVal(row, 1) +
                        "\t" + this.getVal(row, 2) +
                        "\t" + this.getVal(row, 3)
                       );
        }
    }
}
