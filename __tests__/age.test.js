import Age from './../src/age.js';

describe('Age', () => {

  test('should create an age object with the inputted age', () => {
    const age = new Age('test',5);
    expect(age.age).toEqual(5);
  });
  test('should return the age in Mercury years, expecting a value .24 * the inputted value', () => {
    const age = new Age('test',26.4);
    expect(age.mercuryAge).toEqual(110);
  });

});