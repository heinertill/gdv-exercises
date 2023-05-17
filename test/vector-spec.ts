import Vector from "../src/05/vector";

import { expect } from 'chai';

describe('Vector', () => {

    it('can be initialized with 4 numbers', () => {
        const v = new Vector(1, 2, 3, 4);
        expect(v).to.be.an('object');
        expect(v.data[0]).to.be.a("number");
        expect(v.data[0]).to.equal(1);
        expect(v.data[1]).to.be.a("number");
        expect(v.data[1]).to.equal(2);
        expect(v.data[2]).to.be.a("number");
        expect(v.data[2]).to.equal(3);
        expect(v.data[3]).to.be.a("number");
        expect(v.data[3]).to.equal(4);
    });

    it('x component can be set and retrieved', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).has.property('x');
        v.x = 42;
        expect(v.x).to.equal(42);
    });

    it('y component can be set and retrieved', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).has.property('y');
        v.y = 42;
        expect(v.y).to.equal(42);
    });

    it('z component can be set and retrieved', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).has.property('z');
        v.z = 42;
        expect(v.z).to.equal(42);
    });

    it('w component can be set and retrieved', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).has.property('w');
        v.w = 42;
        expect(v.w).to.equal(42);
    });

    it('r component can be set and retrieved', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).has.property('r');
        v.r = 42;
        expect(v.r).to.equal(42);
    });

    it('g component can be set and retrieved', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).has.property('g');
        v.g = 42;
        expect(v.g).to.equal(42);
    });

    it('b component can be set and retrieved', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).has.property('b');
        v.b = 42;
        expect(v.b).to.equal(42);
    });

    it('a component can be set and retrieved', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).has.property('a');
        v.a = 42;
        expect(v.a).to.equal(42);
    });

    it('method add exists', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).to.respondTo('add');
    });

    it('method sub exists', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).to.respondTo('sub');
    });

    it('method mul exists', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).to.respondTo('mul');
    });

    it('method div exists', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).to.respondTo('div');
    });

    it('method normalize exists', () => {
        const v = new Vector(0, 0, 0, 0);
        expect(v).to.respondTo('normalize');
    });

    it('length returns the correct result', () => {
        const v = new Vector(0, 4, 3, 0);
        expect(v).has.property('length');
        expect(v.length).to.equal(5);
    });

    it('addition adds the other vector', () => {
        const a = new Vector(1, 2, 3, 1);
        const b = new Vector(1, -2, 0, 0);
        expect(a).to.respondTo('add');

        const c: Vector = a.add(b);
        expect(c).to.not.be.null;
        expect(c).to.be.an('object');

        expect(c.x).to.equal(2);
        expect(c.y).to.equal(0);
        expect(c.z).to.equal(3);
        expect(c.w).to.equal(1);
    });

    it('addition does not change the value of "this"', () => {

        const a = new Vector(1, 2, 3, 1);
        const b = new Vector(1, -2, 0, 0);
        expect(a).to.respondTo('add');

        const c: Vector = a.add(b);
        expect(a).to.not.be.null;
        expect(a).to.be.an('object');

        expect(a.x).to.equal(1);
        expect(a.y).to.equal(2);
        expect(a.z).to.equal(3);
        expect(a.w).to.equal(1);
    });

    it('subtraction subtracts the other vector', () => {
        const a = new Vector(1, 3, 3, 0);
        const b = new Vector(2, -2, 0, 0);
        expect(a).to.respondTo('sub');

        const c: Vector = a.sub(b);
        expect(c).to.not.be.null;
        expect(c).to.be.an('object');

        expect(c.x).to.equal(-1);
        expect(c.y).to.equal(5);
        expect(c.z).to.equal(3);
        expect(c.w).to.equal(0);
    });

    it('subtraction does not change the value of "this"', () => {

        const a = new Vector(1, 2, 3, 1);
        const b = new Vector(1, -2, 0, 0);
        expect(a).to.respondTo('sub');

        const c: Vector = a.sub(b);
        expect(a).to.not.be.null;
        expect(a).to.be.an('object');

        expect(a.x).to.equal(1);
        expect(a.y).to.equal(2);
        expect(a.z).to.equal(3);
        expect(a.w).to.equal(1);
    });

    it('multiplication with a scalar multiplies correctly', () => {
        const a = new Vector(1, 3, 3, 0);
        expect(a).to.respondTo('mul');

        const c: Vector = a.mul(4);
        expect(c.x).to.equal(4);
        expect(c.y).to.equal(12);
        expect(c.z).to.equal(12);
        expect(c.w).to.equal(0);
    });

    it('multiplication does not change the value of "this"', () => {
        const a = new Vector(1, 3, 3, 0);
        expect(a).to.respondTo('mul');

        const c: Vector = a.mul(4);
        expect(a.x).to.equal(1);
        expect(a.y).to.equal(3);
        expect(a.z).to.equal(3);
        expect(a.w).to.equal(0);
    });


    it('division by a scalar divides correctly', () => {
        const a = new Vector(3, 12, 6, 0);
        expect(a).to.respondTo('div');

        const c: Vector = a.div(3);
        expect(c.x).to.equal(1);
        expect(c.y).to.equal(4);
        expect(c.z).to.equal(2);
        expect(c.w).to.equal(0);
    });

    it('division does not change the value of "this"', () => {
        const a = new Vector(1, 3, 3, 0);
        expect(a).to.respondTo('div');

        const c: Vector = a.div(4);
        expect(a.x).to.equal(1);
        expect(a.y).to.equal(3);
        expect(a.z).to.equal(3);
        expect(a.w).to.equal(0);
    });

    it('cross product returns the correct result', () => {

        const a = new Vector(1, 3, 3, 0);
        const b = new Vector(2, -2, 0, 0);
        expect(a).to.respondTo('cross');
        const c = a.cross(b);
        expect(c.x).to.equal(6);
        expect(c.y).to.equal(6);
        expect(c.z).to.equal(-8);
        expect(c.w).to.equal(0);
    });

    it('cross product does not change the value of "this"', () => {

        const a = new Vector(1, 3, 3, 0);
        const b = new Vector(2, -2, 0, 0);
        expect(a).to.respondTo('cross');
        const c = a.cross(b);
        expect(a.x).to.equal(1);
        expect(a.y).to.equal(3);
        expect(a.z).to.equal(3);
        expect(a.w).to.equal(0);
    });

    it('dot product is correct', () => {

        const a = new Vector(1, 3, 3, 0);
        const b = new Vector(2, 2, 1, 0);
        const c = new Vector(2, -2, 0, 0);
        expect(a).to.respondTo('dot');
        const d = a.dot(b);
        const e = b.dot(c);
        expect(d).to.equal(11);
        expect(e).to.equal(0);
    });

    it('equality of different vectors returns false', () => {

        const a = new Vector(1, 3, 3, 1);
        const b = new Vector(2, -2, 0, 1);
        expect(a).to.respondTo('equals');

        expect(a.equals(b)).to.equal(false);
    });

    it('equality of equal vectors returns true', () => {

        const a = new Vector(1, 3, 3, 1);
        expect(a).to.respondTo('equals');

        expect(a.equals(a)).to.equal(true);
    });

    it('vectors very close to each other are equal', () => {

        const a = new Vector(1, 3, 3, 1);
        const b = new Vector(1.0000000000001, 3.000000000001, 2.9999999999999, 1);
        expect(a).to.respondTo('equals');

        expect(a.equals(b)).to.equal(true);
    });
});
