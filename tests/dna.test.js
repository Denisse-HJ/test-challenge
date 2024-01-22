const dna = require('../dna.js');

describe('describe dna', () => {
  it('Recibe un dna que cumpla con CTAGGGTA', () => {
    expect(dna('CTAGGGTA')).toBe('CTAGGGTA');
    expect(dna('cTAgGGtA')).toBe('CTAGGTA');
    expect(dna('ACGTacgt')).toBe('ACGT');
    expect(dna('ACGTCGGacgt456C')).toBe('ACGTCGGC');
  });
  it('la cadena de dna esta vacia', () => {
    expect(dna('')).toBe('');
  });
});
//CTAGGGTA