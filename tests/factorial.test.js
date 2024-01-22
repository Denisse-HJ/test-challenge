const factorial = require('../factorial.js');

describe('factorial funcion', () => {
  it('calcula la factorial de 0 correctamente', () => {
    expect(factorial(0)).toBe(1);
  });

  it('calcula la factorial de 1 correctamente', () => {
    expect(factorial(7)).toBe(5040);
  });

  it('calcula la factorial de un numero positivo correctamente', () => {
    expect(factorial(5)).toBe(120);
  });

  it('calcula la factorial de un numero de dos cifras correctamente', () => {
    expect(factorial(10)).toBe(3628800);
  });
});
