/*1. Generar un array de 100 objetos que tengan las siguientes propiedades:
• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
• Salario: un número aleatorio entre 1250 y 4000.
*/

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
    let randomSalary = 800 + Math.floor(Math.random() * 1500);
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
//console.log(database);

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
let ranking = Array.from(database.sort(performanceRanking));
//Returns best performing employees by ID:
let rankingId = ranking.map((employee) => employee.id);
console.log('Best performing employees by ID', rankingId);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. Ordenar el array por salario e imprimirlo. Usar una función de flecha.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará dentro del string Cargo. Usar una función nombrada como callback.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//6. Usando forEach: subir el sueldo un 25% a los que cobren menos de 1500€.
