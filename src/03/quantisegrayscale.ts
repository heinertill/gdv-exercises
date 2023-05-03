/**
 * Posterise the source image and save the result in the target image.
 * Restrict the amount of used brightness levels to four equidistant values.
 *
 * @param x The x coordinate of the pixel to posterise
 * @param y The y coordinate of the pixel to posterise
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function quantisegrayscale(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {

    // TODO: Convert the pixel at position (x, y) in the source array from RGB to XYZ. Limit the 
    // TODO: Limit the brightness to the set of 4 different values 0, 85, 170, 255.
    // TODO: Set the RGBA values in the target array to this brightness.
    let adress: number = 4 * (x + width*y);
    target[adress] =  0; // rot
    target[adress+1] =  0; // grün
    target[adress+2] =  0; // blau
    let quantizer: number = Math.floor(((255 -(0.2126729*source[adress] + 0.7151522*source[adress+1] + 0.0721750*source[adress+2]))/85)+0.5);
    target[adress+3] =  quantizer*85; // transparenz
}
