import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { ddaSimple } from './ddasimple';

var pointA: [ number, number ] = [ 0, 0 ];
var pointB: [ number, number ] = [ 200, 100 ];

let canvasDDA: HTMLCanvasElement;
let ctxDDA: CanvasRenderingContext2D;
let imageDataDDA: ImageData;

function drawDDA() {

    const data = imageDataDDA.data;
    data.fill(0);
    ddaSimple(data, pointA, pointB, canvasDDA.width, canvasDDA.height);
    ctxDDA.putImageData(imageDataDDA, 0, 0);
}

window.addEventListener('load', evt => {

    canvasDDA = document.getElementById("result") as HTMLCanvasElement;
    if (canvasDDA === null)
        return;
    ctxDDA = canvasDDA.getContext("2d");
    imageDataDDA = ctxDDA.getImageData(0, 0, canvasDDA.width, canvasDDA.height);

    const canvasExample = document.getElementById("original") as HTMLCanvasElement;
    canvasExample.height = canvasExample.width;
    const ctxExample = canvasExample.getContext("2d");

    ctxExample.clearRect(0, 0, canvasExample.width, canvasExample.height);
    ctxExample.beginPath();
    ctxExample.moveTo(pointA[0], pointA[1]);
    ctxExample.lineTo(pointB[0], pointB[1]);
    ctxExample.stroke();

    drawDDA();
});
