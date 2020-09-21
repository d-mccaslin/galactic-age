import Age from './../src/age.js';

describe('Age', () => {

  test('should create an age object with the inputted age', () => {
    const age = new Age('test',5);
    expect(age.age).toEqual(5);
  });
  test('should return double the inputted age', () => {
    const age= new Age('test',5);
    expect(age.doubleAge()).toEqual(10);
  });
});