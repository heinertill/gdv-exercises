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
    let adress: number = 4 * (x + width*y);
    dest[adress] =  source[adress] * (Math.pow(source[adress]/255, 1/gamma)) ; // rot
    dest[adress+1] =  source[adress+1] * (Math.pow(source[adress+1]/255, 1/gamma))  // grün
    dest[adress+2] =  source[adress+2] * (Math.pow(source[adress+2]/255, 1/gamma)) ; // blau
    dest[adress+3] =  255; // transparenz
}
