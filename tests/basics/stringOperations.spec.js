

'use strict'

var chai = require('chai');
var expect = require('chai').expect;
var revWord = require('../../src/basics/stringOperations.js');

describe('Testing reverse of a String' , function() {
    var inputString="HELLO";
    var outputString=revWord.revString(inputString);
    console.log(outputString);
    it('Checking the input string is null', function(){
    	expect(outputString).to.not.be.null;
    	expect(outputString).to.not.be.undefined;
    });
    it('Input should be string' , function(){
    	expect(outputString).to.be.a('string');
    	expect(outputString).to.not.be.a('number');
    	expect(outputString).to.not.be.a('array');
    	expect(outputString).to.not.be.a('object');
    });
    it('Reverse string', function(){
    	expect(outputString).to.be.equal('OLLEH');
    	 expect(outputString).to.not.be.a('HELLO');
    	 expect(outputString).to.not.be.a('olleh');
    })

});