//primo EX:

const Person = function () {
  this.firstName = "";
  this.lastName = "";
  this.age = "";
  this.location = "";
  this.utente = () => {
    return `$ {this.firstName} ${this.lastName} di ${this.age} anni, attualmente vive in ${this.location}`;
  };
};
const ind1 = new Person();
ind1.firstName = "MArco";
ind1.lastName = "Pino";
ind1.age = 72;
ind1.location = "Sardegna";

//console.log(ind1.utente());

const ind2 = new Person();
ind2.firstName = "Mouna";
ind2.lastName = "Favola";
ind2.age = 60;
ind2.location = "Milano";

// console.log(ind2.utente());

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  Case(ind2) {
    if (this.age >= ind2.age) {
      return `${this.firstName} ${this.lastName} di ${this.age} anni, e attualmente vive a ${this.location} ed è più grande di ${ind2.firstName} ${ind2.lastName} di ${ind2.age} anni, e attualmente vive a ${ind2.location}`;
    } else {
      return `${ind2.firstName} ${ind2.lastName} di ${ind2.age} anni, e attualmente vive a ${ind2.location} è meno vecchio di ${this.firstName} ${this.lastName} di ${this.age} anni, e attualmente vive a ${this.location}`;
    }
  }
}

const ind1User = new User("Marco", "Pino", 72, "Sardegna");
const ind2User = new User("Mouna", "Favola", 60, "Milano");
console.log(ind1User.Case(ind2User));
