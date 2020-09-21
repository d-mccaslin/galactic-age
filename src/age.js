export default class Age {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  mercuryAge() {
    return this.age / (.24);
  }

  venusAge() {
    return this.age / (.62);
  }

  marsAge() {
    return this.age / (1.88);
  }

  jupiterAge() {
    return this.age / (11.86);
  }

}