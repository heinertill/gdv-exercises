/**
 * Convert the color information of the pixel at (x, y) to grayscale by using the
 * Y coordinate of the XYZ color space.
 *
 * @param x The x coordinate of the pixel to convert
 * @param y The y coordinate of the pixel to convert
 * @param source The source image data
 * @param target The image data to save the converted color information to
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function grayscale(x: number, y: number, source: Uint8ClampedArray, target: Uint8ClampedArray, width: number, height: number) {

    // TODO: Convert the pixel at position (x, y) in the source array from RGB to XYZ.
    // TODO: Set the RGBA values in the target array according to the Y component of the source pixel in XYZ space.

    let adress: number = 4 * (x + width*y);
    target[adress] =  0; // rot
    target[adress+1] =  0; // grün
    target[adress+2] =  0; // blau
    //target[adress+3] =  255-2*(0.2126729*source[adress] + 0.151522*source[adress+1] + 0.0721750*source[adress+2]); // transparenz
    target[adress+3] =  255 -(0.2126729*source[adress] + 0.7151522*source[adress+1] + 0.0721750*source[adress+2]); // transparenz
    

}
