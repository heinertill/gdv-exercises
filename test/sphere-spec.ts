import Sphere from "../src/05/sphere";
import Intersection from "../src/05/intersection";

import { assert, expect } from 'chai';
import Vector from "../src/05/vector";
import Ray from "../src/05/ray";

describe('Sphere', () => {

    it('can be initialized with center, radius and color', () => {
        const s: Sphere = new Sphere(new Vector(0, 0, 0, 1), 1, new Vector(0, 0, 0, 0));
        expect(s).to.be.an('object');
    });

    it('a sphere at origin and radius 1 can be intersected correctly with the x axis', () => {

        const s: Sphere = new Sphere(new Vector(0, 0, 0, 1), 1, new Vector(0, 0, 0, 0));
        const i: Intersection = s.intersect(new Ray(new Vector(-10, 0, 0, 1), new Vector(1, 0, 0, 0)));
        expect(s).to.be.an('object');
        expect(i).to.be.an('object');

        expect(i.point.x).to.equal(-1);
        expect(i.point.y).to.equal(0);
        expect(i.point.z).to.equal(0);
    });

    it('a sphere at origin and radius 1 can be intersected correctly with the y axis', () => {

        const s: Sphere = new Sphere(new Vector(0, 0, 0, 1), 1, new Vector(0, 0, 0, 0));
        const i: Intersection = s.intersect(new Ray(new Vector(0, -10, 0, 1), new Vector(0, 1, 0, 0)));
        expect(s).to.be.an('object');
        expect(i).to.be.an('object');

        expect(i.point.x).to.equal(0);
        expect(i.point.y).to.equal(-1);
        expect(i.point.z).to.equal(0);
    });

    it('a sphere at origin and radius 1 can be intersected correctly with the z axis', () => {

        const s: Sphere = new Sphere(new Vector(0, 0, 0, 1), 1, new Vector(0, 0, 0, 0));
        const i: Intersection = s.intersect(new Ray(new Vector(0, 0, -10, 1), new Vector(0, 0, 1, 0)));
        expect(s).to.be.an('object');
        expect(i).to.be.an('object');

        expect(i.point.x).to.equal(0);
        expect(i.point.y).to.equal(0);
        expect(i.point.z).to.equal(-1);
    });

    it('intersection is correct when radius != 1', () => {

        const s: Sphere = new Sphere(new Vector(0, 0, 0, 1), 2.5, new Vector(0, 0, 0, 0));
        const i: Intersection = s.intersect(new Ray(new Vector(-10, 0, 0, 1), new Vector(1, 0, 0, 0)));
        expect(s).to.be.an('object');
        expect(i).to.be.an('object');

        expect(i.point.x).to.equal(-2.5);
        expect(i.point.y).to.equal(0);
        expect(i.point.z).to.equal(0);
        expect(i.t).to.equal(7.5);
    });

    it('intersection is correct when center != (0, 0, 0, 1)', () => {

        const s: Sphere = new Sphere(new Vector(1, 0, 0, 1), 2.5, new Vector(0, 0, 0, 0));
        const i: Intersection = s.intersect(new Ray(new Vector(-10, 0, 0, 1), new Vector(1, 0, 0, 0)));
        expect(s).to.be.an('object');
        expect(i).to.be.an('object');

        expect(i.point.x).to.equal(-1.5);
        expect(i.point.y).to.equal(0);
        expect(i.point.z).to.equal(0);
        expect(i.t).to.equal(8.5);
    });
});

// TODO: Test normalization of normal
