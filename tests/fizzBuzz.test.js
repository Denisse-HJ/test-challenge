const fizzBuzz = require('../fizzBuzz.js');

describe('fizzBuzz funcion', () => {
    it('Debera obtener Fizz cuando el numero sea divisible entre 3', () => {
      expect(fizzBuzz(9)).toBe('Fizz');
    });
    it('Debera obtener Buzz cuando el numero sea divisible entre 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });
    it('Debera obtener FizzBuzz cuando el numero sea divisible entre 3 y 5', () => {
        expect(fizzBuzz(105)).toBe('FizzBuzz');
    });
 });