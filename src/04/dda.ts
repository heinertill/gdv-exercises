/**
 * Draws a line from pointA to pointB on the canvas
 * with the DDA algorithm.
 * @param  {Array.<number>} data   - The linearised pixel array
 * @param  {Array.<number>} pointA - The start point of the line
 * @param  {Array.<number>} pointB - The end point of the line
 * @param  {number} width          - The width of the canvas
 * @param  {number} height         - The height of the canvas
 */
export function dda(
    data: Uint8ClampedArray,
    pointA: [number, number],
    pointB: [number, number],
    width: number, height: number
) {
    let setPixel = function (
        x: number, y: number,
        data: Uint8ClampedArray, width: number
    ) {
        data[4 * (width * y + x) + 0] = 0;
        data[4 * (width * y + x) + 1] = 0;
        data[4 * (width * y + x) + 2] = 0;
        data[4 * (width * y + x) + 3] = 255;
    }

    setPixel(pointA[0], pointA[1], data, width);
    setPixel(pointB[0], pointB[1], data, width);

    // TODO: Distinguish between the main direction x and y.
    // TODO: Swap start and end points if necessary to reduce the number of cases.
}
