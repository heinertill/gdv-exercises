import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import Vector from '../05/vector';
import Sphere from '../05/sphere';
import Ray from '../05/ray';
import Camera from '../05/camera';
import Intersection from '../05/intersection';
import { raytracePhong } from './raytracing';

window.addEventListener('load', () => {

    const canvas = document.getElementById("result") as HTMLCanvasElement;
    if (canvas === null)
        return;

    const ctx = canvas.getContext("2d");
    var pixel = ctx.createImageData(1, 1);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const spheres: Sphere[] = [
        new Sphere(new Vector(.5, -.2, -2, 1), 0.4, new Vector(.3, 0, 0, 1)),
        new Sphere(new Vector(-.5, -.2, -1.7, 1), 0.2, new Vector(0, 0, .3, 1))
    ];

    const lightPositions = [
        new Vector(1, 1, -1, 1)
    ];

    let shininess = 10;

    const camera = new Camera(
        canvas.width, canvas.height, Math.PI / 3, new Vector(0, 0, 0, 1)
    );

    function animate() {

        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {

                raytracePhong(data, camera, spheres, lightPositions, shininess, x, y, canvas.width, canvas.height);

                // update pixel in HTML context2d
                for (let i = 0; i < 4; i ++)
                    pixel.data[i] = data[(x + y * canvas.width) * 4 + i];
                ctx.putImageData(pixel, x, y);
            }
        }
    }

    const shininessElement =
          document.getElementById("shininess") as HTMLInputElement;

    shininessElement.onchange = function () {
        shininess = Number(shininessElement.value);
        window.requestAnimationFrame(animate);
    }

    shininess = Number(shininessElement.value);

    window.requestAnimationFrame(animate);
});
