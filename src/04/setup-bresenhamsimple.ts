import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { bresenhamSimple } from './bresenhamsimple';

var pointA: [ number, number ] = [ 0, 0 ];
var pointB: [ number, number ] = [ 200, 100 ];

let canvasBresenham: HTMLCanvasElement;
let ctxBresenham: CanvasRenderingContext2D;
let imageDataBresenham: ImageData;

function drawBresenham() {

    const data = imageDataBresenham.data;
    data.fill(0);
    bresenhamSimple(data, pointA, pointB, canvasBresenham.width, canvasBresenham.height);
    ctxBresenham.putImageData(imageDataBresenham, 0, 0);
}

window.addEventListener('load', evt => {

    canvasBresenham = document.getElementById("result") as HTMLCanvasElement;
    if (canvasBresenham === null)
        return;

    ctxBresenham = canvasBresenham.getContext("2d");
    imageDataBresenham = ctxBresenham.getImageData(0, 0, canvasBresenham.width, canvasBresenham.height);

    const canvasExample = document.getElementById("original") as HTMLCanvasElement;
    canvasExample.height = canvasExample.width;
    const ctxExample = canvasExample.getContext("2d");

    ctxExample.clearRect(0, 0, canvasExample.width, canvasExample.height);
    ctxExample.beginPath();
    ctxExample.moveTo(pointA[0], pointA[1]);
    ctxExample.lineTo(pointB[0], pointB[1]);
    ctxExample.stroke();

    drawBresenham();
});
