class Human {
  constructor(){
    this.gender = 'Female'
  }
  print gender() {
    console.log(this.gender)
  }
}

class Person extends Human{
  constructor() {
    super()
    this.name = 'Sanu';
    this.gender = 'Male'
  }
  print MyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.print MyName();
person.print Gender();