export default class Age {
  constructor(name,age,averageLife) {
    this.name = name;
    this.age = age;
    this.averageLife = averageLife;
  }
}

Age.prototype.mercuryAge = function() {
  return this.age / (.24);
};

Age.prototype.venusAge = function() {
  return this.age / (.62);
};

Age.prototype.marsAge = function() {
  return this.age / (1.88);
};

Age.prototype.jupiterAge = function() {
  return this.age / (11.86);
};

Age.prototype.mercuryYearsLeft = function() {
  const mercuryLifeExpectancy = this.averageLife / (.24);
  const currentAge = this.mercuryAge();
  const yearsLeft = mercuryLifeExpectancy - currentAge;
  return Math.abs(yearsLeft);
}

Age.prototype.venusYearsLeft = function() {
  const venusLifeExpectancy = this.averageLife / (.62);
  const currentAge = this.venusAge();
  return venusLifeExpectancy - currentAge;
}

Age.prototype.marsYearsLeft = function() {
  const marsLifeExpectancy = this.averageLife / (1.88);
  const currentAge = this.marsAge();
  return marsLifeExpectancy - currentAge;
}

Age.prototype.jupiterYearsLeft = function() {
  const jupiterLifeExpectancy = this.averageLife / (11.86);
  const currentAge = this.jupiterAge();
  return jupiterLifeExpectancy - currentAge;
}