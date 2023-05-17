import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import Sphere from './sphere';
import Vector from './vector';
import Camera from './camera';
import { raytrace } from './raytracing';

window.addEventListener('load', evt => {

    const canvas = document.getElementById("result") as HTMLCanvasElement;
    if (canvas === null)
        return;

    const ctx = canvas.getContext("2d");
    var pixel = ctx.createImageData(1, 1);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const sphere = new Sphere(
        new Vector(0, 0, -10, 1), // position
        4.0,                      // radius
        new Vector(0, 0, 0, 1)    // color
    );

    const camera = new Camera(canvas.width, canvas.height, Math.PI / 3);

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {

            raytrace(data, camera, sphere, x, y, canvas.width, canvas.height);

            // update pixel in HTML context2d
            for (let i = 0; i < 4; i ++)
                pixel.data[i] = data[(x + y * canvas.width) * 4 + i];
            ctx.putImageData(pixel, x, y);
        }
    }
});
