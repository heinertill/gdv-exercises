import Vector from "../src/05/vector";
import Matrix from "../src/07/matrix";

import { assert, expect } from 'chai';
import { SingleEntryPlugin } from "webpack";

describe('Matrix', () => {

    it('can be initialized with an array consisting of 16 numbers', () => {
        const m = new Matrix([
            0, 0, 0, 0,        
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 1
        ]);
        expect(m).to.be.an('object');
    });

    it('single values can be set and retrieved', () => {
        const m = Matrix.identity();

        expect(m).has.property('setVal');
        expect(m).has.property('getVal');
        m.setVal(1, 2, 342);
        expect(m.getVal(1, 2)).to.equal(342);
    });

    it('all values can be retrieved', () => {
        
        const m = new Matrix([
            0, 1, 2, 3,        
            4, 5, 6, 7,
            8, 9, 10, 11,
            12, 13, 14, 15
        ]);

        expect(m).has.property('getVals');
        var mat = m.getVals();
        assert.deepEqual(mat, [
            0, 1, 2, 3,        
            4, 5, 6, 7,
            8, 9, 10, 11,
            12, 13, 14, 15
        ]);
    });
    
    it('translation works', () => {

        expect(Matrix).has.property('translation');
        
        const t = Matrix.translation(new Vector(1, 2, 3, 0));

        expect(t).to.not.be.null;
        expect(t).to.be.an('object');

        assert.deepEqual(t.getVals(), [
            1, 0, 0, 1,        
            0, 1, 0, 2,
            0, 0, 1, 3,
            0, 0, 0, 1
        ]);
    });

    it('rotation around x-axis works', () => {

        expect(Matrix).has.property('rotation');
        
        const x = Matrix.rotation(new Vector(1, 0, 0, 0), Math.PI / 4);

        expect(x).to.not.be.null;
        expect(x).to.be.an('object');
        assert.deepEqual(x.getVals(), [
            1, 0, 0, 0,        
            0, 0.7071067690849304, -0.7071067690849304, 0,
            0, 0.7071067690849304, 0.7071067690849304, 0,
            0, 0, 0, 1
        ]);
    });

    it('rotation around y-axis works', () => {

        expect(Matrix).has.property('rotation');
        
        const y = Matrix.rotation(new Vector(0, 1, 0, 0), -Math.PI / 4);
        expect(y).to.not.be.null;
        expect(y).to.be.an('object');
        assert.deepEqual(y.getVals(), [
            0.7071067690849304, 0, -0.7071067690849304, 0,        
            0, 1, 0, 0,
            0.7071067690849304, 0, 0.7071067690849304, 0,
            0, 0, 0, 1
        ]);
    });

    it('rotation around z-axis works', () => {

        expect(Matrix).has.property('rotation');
        
        const z = Matrix.rotation(new Vector(0, 0, 1, 0), -Math.PI / 4);

        expect(z).to.not.be.null;
        expect(z).to.be.an('object');
        assert.deepEqual(z.getVals(), [
            0.7071067690849304, 0.7071067690849304, 0, 0,
            -0.7071067690849304, 0.7071067690849304, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    });

    it('scaling matrix works', () => {

        expect(Matrix).has.property('scaling');
        
        const m = Matrix.scaling(new Vector(2, 3, 4, 0));

        expect(m).to.not.be.null;
        expect(m).to.be.an('object');
        assert.deepEqual(m.getVals(), [
            2, 0, 0, 0,
            0, 3, 0, 0,
            0, 0, 4, 0,
            0, 0, 0, 1
        ]);
    });

    it('matrix vector multiplication works', () => {

        let m1: Matrix = new Matrix([
            -1, 0, 0, 1,
            0, -1, 0, 2,
            0, 0, 1, 3,
            0, 0, 0, 1 ]);

        let a = new Vector(0, 1, 0, 1);
        let b = new Vector(-1, 1, 0, 1);

        expect(m1).to.not.be.null;
        expect(m1).to.be.an('object');
    
        expect(m1).has.property('mulVec');

        let at = m1.mulVec(a);

        assert.deepEqual(at.valueOf(), [
            1, 1, 3, 1
        ]);

        let m2: Matrix = new Matrix([
            1, 0, 0, 0,
            0, 0, -1, 0,
            0, 1, 0, 0,
            0, 0, 0, 1 ]);

        let bt = m2.mulVec(b);

        assert.deepEqual(bt.valueOf(), [
            -1, 0, 1, 1
        ]);
    });

    it('matrix matrix multiplication works', () => {

        let m1: Matrix = new Matrix([
            -1, 0, 0, 1,
            0, -1, 0, 2,
            0, 0, 1, 3,
            0, 0, 0, 1 ]);

        expect(m1).to.not.be.null;
        expect(m1).to.be.an('object');
    
        expect(m1).has.property('mul');

        let m2: Matrix = new Matrix([
            1, 0, 0, 0,
            0, 0, -1, 0,
            0, 1, 0, 0,
            0, 0, 0, 1 ]);

        let m = m1.mul(m2);

        assert.deepEqual(m.getVals(), [
            -1, 0, 0, 1,
            0, 0, 1, 2,
            0, 1, 0, 3,
            0, 0, 0, 1
        ]);
    });
});