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
  test('should return the age in Jupiter years, assuming a Jupiter year is 11.86 Earth years', () => {
    const age = new Age('test',237.2);
    expect(age.jupiterAge()).toEqual(20);
  })
  test('should return the amount of years left to live on Mercury, given an average life expectancy', () => {
    const age = new Age('test',26.4,48);
    expect(age.mercuryYearsLeft()).toEqual(90);
  })
  test('should return the amount of years left to live on Venus, given an average life expectancy', () => {
    const age = new Age('test',49.6,124);
    expect(age.venusYearsLeft()).toEqual(120);
  })
  test('should return the amount of years left to live on Mars, given an average life expectancy', () => {
    const age = new Age('test',94,188);
    expect(age.marsYearsLeft()).toEqual(50);
  })
  test('should return the amount of years left to life on Jupiter, given an average life expectancy', () => {
    const age = new Age('test',237.2,355.8);
    expect(age.jupiterYearsLeft()).toEqual(10.000000000000004);
  })
  test('should return the amount of years that the average life expectancy has been exceded on Mercury', () => {
    const age = new Age('test',26.4,16.8);
    expect(age.mercuryYearsLeft()).toEqual(40);
  })
  test('should return the amount of years that the average life expectancy has been exceeded on Venus', () => {
    const age = new Age('test',49.6,31);
    expect(age.venusYearsLeft()).toEqual(30);
  })
  test('should return the amount of years that the average life expectancy has been exceeded on Mars', () => {
    const age = new Age('test',94,3.76);
    expect(age.marsYearsLeft()).toEqual(48);
  })
  test('should return the amount of years that the average life expectancy has been exceeded on Jupiter', () => {
    const age = new Age('test',237.2,225.34);
    expect(age.jupiterYearsLeft()).toEqual(1);
  })
});