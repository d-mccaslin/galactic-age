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
  test('should return the age in Venus years, assuming a Venus year is .62 Earth years', () => {
    const age = new Age('test',49.6);
    expect(age.venusAge()).toEqual(80);
  })
  test('should return the age in Mars years, assuming a Mars year is 1.88 Earth years', () => {
    const age = new Age('test',94);
    expect(age.marsAge()).toEqual(50);
  })

});