import Ray from "../src/05/ray";
import Camera from "../src/05/camera";

import { assert, expect } from 'chai';

describe('Ray', () => {

    it('can be initialized with two numbers and a camera', () => {
        const r: Ray = Ray.makeRay(0, 0, new Camera(128, 128, 45));
        expect(r).to.be.an('object');
    });

    it('the origin of the ray is initialized correctly', () => {
        const r: Ray = Ray.makeRay(0, 0, new Camera(128, 128, 45));
        expect(r).to.be.an('object');
        expect(r.origin.x).to.equal(0);
        expect(r.origin.y).to.equal(0);
        expect(r.origin.z).to.equal(0);
        expect(r.origin.w).to.equal(1);
    });

    it('the direction is normalized', () => {
        const r: Ray = Ray.makeRay(64, 64, new Camera(129, 129, 45));
        expect(r).to.be.an('object');
        expect(r.direction.length).to.equal(1);
    });

    it('the direction is initialized correctly', () => {
        const r: Ray = Ray.makeRay(64, 64, new Camera(129, 129, 45));
        expect(r).to.be.an('object');
        expect(r.direction.x).to.be.closeTo(0, 0.01);
        expect(r.direction.y).to.be.closeTo(0, 0.01);
        expect(r.direction.z).to.be.closeTo(-1, 0.01);
        expect(r.direction.w).to.be.closeTo(0, 0.01);

        const r2: Ray = Ray.makeRay(0, 0, new Camera(129, 129, 45));
        expect(r2).to.be.an('object');
        expect(r2.direction.x).to.be.closeTo(-0.435, 0.01);
        expect(r2.direction.y).to.be.closeTo(0.435, 0.01);
        expect(r2.direction.z).to.be.closeTo(-0.787, 0.01);
        expect(r2.direction.w).to.be.closeTo(0, 0.01);

        const r3: Ray = Ray.makeRay(10, 7, new Camera(64, 64, 90));
        expect(r3).to.be.an('object');
        expect(r3.direction.x).to.be.closeTo(-0.564, 0.01);
        expect(r3.direction.y).to.be.closeTo(0.642, 0.01);
        expect(r3.direction.z).to.be.closeTo(-0.518, 0.01);
        expect(r3.direction.w).to.be.closeTo(-0.02, 0.01);
    });
});
