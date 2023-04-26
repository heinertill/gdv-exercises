import { swapBuffers } from './setup-gradient';

/**
 * Determines the color of a pixel (x, y)
 * and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 */
export function gradient(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {

    // TODO: Compute the position of pixel (x, y) in the linearised 'data' array. Each pixel is using 4 bytes in the data array, one each for red, green, blue and alpha.
    // TODO:  Set the red, green and blue components of pixel (x, y) to draw a gradient from black (0) to white (255). Set the alpha component to maximum (255).
}
