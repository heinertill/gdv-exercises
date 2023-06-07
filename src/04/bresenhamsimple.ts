 function setPixel(data: Uint8ClampedArray, x: number, y: number, width: number, height: number) {

    var index = (x + y * width) * 4;
    data[index + 0] = 0;
    data[index + 1] = 0;
    data[index + 2] = 0;
    data[index + 3] = 255;
}

/**
 * Draws a line from pointA to pointB on the canvas
 * with the Bresenham algorithm.
 * @param  {Uint8ClampedArray} data   - The linearised pixel array
 * @param  {[number, number]} pointA - The start point of the line
 * @param  {[number, number]} pointB - The end point of the line
 * @param  {number} width          - The width of the canvas
 * @param  {number} height         - The height of the canvas
 */
export function bresenhamSimple(data: Uint8ClampedArray, pointA: [number, number], pointB: [number, number], width: number, height: number) {
    
    // TODO: 1. Calculate dx and dy and set the start position x and y
    // TODO: 2. Calculate the initial epsilon of the bresenham algorithm
    // TODO: 3. Go from pointA[0] to pointB[0], and update epsilon in each step as given in the bresenham algorithm. Increase y when necessary.
    let dx: number = pointB[0] - pointA[0];
    let dy: number = pointB[1] - pointA[1];
    let epsilon: number = 2*dy - dx;
    let j: number = pointA[0];
    for (let i = pointA[0]; i < pointB[0]; i++) {
        if (epsilon > 0) {
            console.log(i + ":" + j + " set!");
            j++;
            setPixel(data, i+1, j, width, height);
            epsilon = epsilon + (2*dy) - (2*dx);
        } else if (epsilon <= 0) {
            console.log(i + ":" + j + " set!");
            setPixel(data, i+1, j, width, height);
            epsilon = epsilon + (2*dy);
        }
    }
}
