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
