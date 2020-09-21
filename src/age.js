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

}