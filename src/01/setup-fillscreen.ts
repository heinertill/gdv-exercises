import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import { fillscreen } from './fillscreen';

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var imageData: ImageData;

export function swapBuffers() {

    // swap imageData to canvas
    ctx.putImageData(imageData, 0, 0);
}

function drawFillscreen() {

    canvas = document.getElementById("result") as HTMLCanvasElement;
    if (canvas === null)
        return;
    ctx = canvas.getContext("2d");

    var pixel = ctx.createImageData(1, 1);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            fillscreen(data, x, y, canvas.width, canvas.height);

            // update pixel in HTML context2d
            for (let i = 0; i < 4; i ++)
                pixel.data[i] = data[(x + y * canvas.width) * 4 + i];
            ctx.putImageData(pixel, x, y);
        }
    }
}

window.addEventListener('load', evt => {
    drawFillscreen();
});
