/*1. Generar un array de 100 objetos que tengan las siguientes propiedades:
• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
• Salario: un número aleatorio entre 1250 y 4000.
*/

//Add contract date between today and 2 years ago.
// contractDate: new Date(+new Date() - Math.random() * ((1000*60*60*24*365*2)))

class Employee {
  constructor(id, position, performance, salary) {
    this.id = id;
    this.position = position;
    this.performance = performance;
    this.salary = salary;
  }
}

// class Database {
//   constructor(database = []) {
//     this.database = database;
//   }
//   addEmployees(employee) {
//     this.database.push(employee);
//   }
// }

//Instanciating the employees DataBase
// let database = new Database();

//Initializing database.
let database = [];

function createEmployees(qty) {
  for (let i = 1; i <= qty; i++) {
    let randomSalary = 500 + Math.floor(Math.random() * 3500);
    let randomPosition = [
      'Manager',
      'Administrative',
      'Accounting',
      'Finances',
      'Engineer',
    ];
    let randomIndex = Math.floor(Math.random() * randomPosition.length);
    let randomPerformance = Math.floor(Math.random() * 10 + 1);

    let employee = new Employee(
      i,
      randomPosition[randomIndex],
      randomPerformance,
      randomSalary
    );
    //database.addEmployees(employee);
    database.push(employee);
  }
}

createEmployees(5);
//console.log('WITHOUT INCREASE', database);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.
//Accesing employee performance: database.database[i].performance

function performanceRanking(a, b) {
  if (a.performance < b.performance) {
    return 1;
  }
  if (a.performance > b.performance) {
    return -1;
  }
  return 0;
}

//Creates new array from sorted database.
let _performanceRanking = Array.from(database.sort(performanceRanking));
//Returns best performing employees by ID:
let rankingId = _performanceRanking.map((employee) => employee.id);
//console.log('Best performing employees by ID', rankingId);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. Ordenar el array por salario e imprimirlo. Usar una función de flecha.
const salaryRanking = (a, b) => {
  if (a.salary < b.salary) {
    return 1;
  }
  if (a.salary > b.salary) {
    return -1;
  }
  return 0;
};

let _salaryRanking = Array.from(database.sort(salaryRanking));
let salaryRankingID = _salaryRanking.map((employee) => employee.id);

//WAY SIMPLIER:
// let sorted = database.sort((a, b) => {
//   return a.salary - b.salary;
// });
// console.log(sorted);
//let salaryAmount = _salaryRanking.map((employee) => employee.salary);
//console.log('Salary rankingby ID: ', salaryRankingID);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará dentro del string Cargo. Usar una función nombrada como callback.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.
let salaryHigher2500 = database.filter((employee) => employee.salary >= 2500);
//console.log('Employees with salary of $2500 or higher: ');
// salaryHigher2500.forEach((employee) => {
//   console.log(`id: ${employee.id},`, `salary: $${employee.salary}`);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6. Usando forEach: subir el sueldo un 25% a los que cobren menos de 1500€.
database.forEach((employee) => {
  if (employee.salary < 1500) {
    let increase = 1.25;
    employee.salary = employee.salary * increase;
    //console.log('WITH INCREASE', database);
  }
});

//Filtrar todos los elementos con sueldo mayor a 700 y que se eliminen del array

let newDB = database.slice(
  element.indexOf(
    database.filter((element) => {
      return element.salary > 700;
    })
  )
);
console.log(newDB);
