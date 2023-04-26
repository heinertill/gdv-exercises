import { swapBuffers } from './setup-circle';

/**
 * Determines the color of a pixel (x, y) to create
 * a circle and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param cx The center x coordinate of the circle
 * @param cy The center y coordinate of the circle
 * @param width The width of the canvas
 * @param height The height of the canvas
 * @param radius The radius of the circle
 */
export function circle(data: Uint8ClampedArray, x: number, y: number, cx: number, cy: number, width: number, height: number, radius: number) {

    // TODO: Imagine a circle with center (cx, cy) and given radius. Check if pixel (x, y) is inside this circle or not. Set the pixel color accordingly in the pixel array 'data'.
}
