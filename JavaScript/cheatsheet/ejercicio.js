class Employee {
  constructor(dni, name, phone, salary) {
    (this.dni = dni),
      (this.name = name),
      (this.phone = phone),
      (this.salary = salary);
  }
  getDni() {
    return this.dni;
  }
  setNewSalary(increase) {
    this.salary += increase;
    return this.salary;
  }
}

class Architect extends Employee {
  constructor(dni, name, phone, salary, comissions, nProyects) {
    super(dni, name, phone, salary);
    this.comisions = comissions;
    this.nProyects = nProyects;
  }
  design() {
    console.log(`${this.name} está diseñando.`);
  }
  setNewSalary(increase) {
    this.salary += increase + comissions;
    return this.salary;
  }
}

class Administrative extends Employee {
  constructor(dni, name, phone, salary, wordsPerMin, level) {
    super(dni, name, phone, salary);
    this.wordsPerMin = wordsPerMin;
    this.level = level;
  }

  getWPM() {
    return this.wordsPerMin;
  }
  getLevel() {
    return this.level;
  }
}

const empleado1 = new Employee(34615001, "Martín Lupa", 644146404, 2400);
console.log(empleado1);
