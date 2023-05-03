/**
 * Posterise the source image and save the result in the target image.
 * Restrict each color channel to four equidistant values.
 *
 * @param x The x coordinate of the pixel to posterise
 * @param y The y coordinate of the pixel to posterise
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function quantiseColor(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {

    // TODO: Limit the brightness of each color channel to the set of 4 different values 0, 85, 170, 255.
    // TODO: Set the RGBA values in the target array accordingly.
    // TODO:
    let adress: number = 4 * (x + width*y);
    target[adress] =  Math.floor(source[adress]/85)*85 ; // rot
    target[adress+1] =  Math.floor(source[adress+1]/85)*85  // grün
    target[adress+2] =  Math.floor(source[adress+2]/85)*85 ; // blau
    target[adress+3] =  255; // transparenz
}
