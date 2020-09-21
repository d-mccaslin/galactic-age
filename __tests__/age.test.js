import Age from './../src/age.js';

describe('Age', () => {

  test('should create an age object with the inputted age', () => {
    const age = new Age('test',5);
    expect(age.age).toEqual(5);
  });
  test('should return the age in Mercury years, assuming a Mercury year is .24 Earth years', () => {
    const age = new Age('test',26.4);
    expect(age.mercuryAge()).toEqual(110);
  });

});