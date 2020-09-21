export default function Age(name,age) {
  this.name = name;
  this.age = age;
}

Age.prototype.text = function() {
  return this.name + ": " + this.age*2;
}

/*
Age.prototype.age = function() {
  this.age = this.age * 2;
}
*/