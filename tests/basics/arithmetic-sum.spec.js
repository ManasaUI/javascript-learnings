
let expect = require('chai').expect;
let assert = require('chai').assert;
var sumOfNumbers = require('../../src/basics/arithmetic-sum');


describe('Sum of N numbers', ()=> {
    it('argumnet should be a present', () => {
        assert.throws(sumOfNumbers, Error, "Please provide a number");
    })

    it('argumnet should be a valid', () => {
        assert.throws(sumOfNumbers('abc'), Error, "Please provide a valide number");
    })
    
    it('retun 55, if n is 10', () => {
        expect(sumOfNumbers(10)).to.be.equal(55);
    })
});
