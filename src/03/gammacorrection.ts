/**
 * Conducts a gamma adjustment with a given gamma value on the pixel
 * (x, y). The original color information can be read from the source image.
 * The adjusted color is to be saved in the dest array.
 * @param {number} gamma The gamma factor to adjust the brightness
 * @param {Uint8ClampedArray} source The original pixel data
 * @param {Uint8ClampedArray} dest The array to save the adjusted color data to
 * @param {number} x The x coordinate of the pixel to adjust
 * @param {number} y The y coordinate of the pixel to adjust
 * @param {number} width The width of the image in pixels
 * @param {number} height The height of the image in pixels
 */
export function gammaAdjust(gamma: number, source: Uint8ClampedArray,
                            dest: Uint8ClampedArray, x: number, y: number,
                            width: number, height: number) {

    // TODO: Perform a gamma correction with the given gamma value on the current pixel at position (x, y) in the source array, and store the result in the dest array.
}
