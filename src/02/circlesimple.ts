import { swapBuffers } from './setup-circlesimple';

/**
 * Determines the color of a pixel (x, y) to create
 * a circle and saves it into the data array.
 * The data array holds the linearised pixel data of the target canvas
 * row major. Each pixel is of RGBA format.
 * @param data The linearised pixel array
 * @param x The x coordinate of the pixel
 * @param y The y coordinate of the pixel
 * @param width The width of the canvas
 * @param height The height of the canvas
 * @param radius The radius of the circle
 */
export function circleSimple(data: Uint8ClampedArray, x: number, y: number, width: number, height: number, radius: number) {

    // TODO: Imagine a circle with center in the middle of the framebuffer and given radius. Which pixel is the center? Check if pixel (x, y) is inside the circle or not. Set the pixel color accordingly in the pixel array 'data'.
    let adress: number = 4 * (x + width*y); 
    let centerX: number = height/2; 
    let centerY: number = width/2; 
    //let center: number = height/2; 
    
    if ((((centerX-x) * (centerX-x)) + ((centerY-y) * (centerY-y))) <= radius*radius) {
        data[adress] =  0; // rot
        data[adress+1] =  0; // grün
        data[adress+2] =  0; // blau
        data[adress+3] =  255; // transparenz
    }

}
