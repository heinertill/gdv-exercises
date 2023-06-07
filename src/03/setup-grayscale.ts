import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import { grayscale } from './grayscale';

function quantise(evt: Event) {

    const originalCanvas = document.getElementById("original") as HTMLCanvasElement;
    if (originalCanvas === null)
        return;
    const original = originalCanvas.getContext("2d");
    original.drawImage(evt.target as HTMLImageElement, 0, 0, 512, 384);
    const originalData = original.getImageData(0, 0, originalCanvas.width, originalCanvas.height);

    const grayscaleCanvas = document.getElementById("result") as HTMLCanvasElement;
    const grayscaleContext = grayscaleCanvas.getContext("2d");
    var pixel = grayscaleContext.createImageData(1, 1);
    const grayscaleData = grayscaleContext.getImageData(0, 0, grayscaleCanvas.width, grayscaleCanvas.height);

    for (let y = 0; y < grayscaleCanvas.height; y++) {
        for (let x = 0; x < grayscaleCanvas.width; x++) {
            grayscale(x, y, originalData.data, grayscaleData.data, grayscaleCanvas.width, grayscaleCanvas.height);

            // update pixel in HTML context2d
            for (let i = 0; i < 4; i ++)
                pixel.data[i] =
                    grayscaleData.data[(x + y * grayscaleCanvas.width) * 4 + i];
            grayscaleContext.putImageData(pixel, x, y);
        }
    }
}

window.addEventListener('load', () => {

    const squirrel = new Image();
    squirrel.onload = quantise;
    squirrel.src = "quantise.jpg";
});
