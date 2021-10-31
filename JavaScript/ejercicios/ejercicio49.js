/*
Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas) 
correspondientes a los 12 meses del año anterior. 
Construir algoritmo que proporcione:

a)¿En qué mes se registró el mayor coste de producción de dulces?
b)Promedio anual de los costes de producción de bebidas
c)¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?
d)¿Cuál fue el que tuvo menor coste de producción en diciembre?
*/

//The function checks whether the max/min value has ocurred more than once and also prints
//the months where the max/min value happened.
const sweetCosts2021 = [
  { month: 'Jan', cost: 6000 },
  { month: 'Feb', cost: 10000 },
  { month: 'Mar', cost: 10000 },
  { month: 'Apr', cost: 10000 },
  { month: 'May', cost: 10000 },
  { month: 'Jun', cost: 10000 },
  { month: 'Jul', cost: 30000 },
  { month: 'Aug', cost: 10000 },
  { month: 'Sep', cost: 30000 },
  { month: 'Oct', cost: 10000 },
  { month: 'Nov', cost: 10000 },
  { month: 'Dec', cost: 10000 },
];

const drinksCosts2021 = [
  { month: 'Jan', cost: 10000 },
  { month: 'Feb', cost: 5000 },
  { month: 'Mar', cost: 10000 },
  { month: 'Apr', cost: 10000 },
  { month: 'May', cost: 10000 },
  { month: 'Jun', cost: 10000 },
  { month: 'Jul', cost: 10000 },
  { month: 'Aug', cost: 10000 },
  { month: 'Sep', cost: 10000 },
  { month: 'Oct', cost: 20000 },
  { month: 'Nov', cost: 20000 },
  { month: 'Dec', cost: 10000 },
];

const cannedCosts2021 = [
  { month: 'Jan', cost: 10000 },
  { month: 'Feb', cost: 10000 },
  { month: 'Mar', cost: 10000 },
  { month: 'Apr', cost: 10000 },
  { month: 'May', cost: 10000 },
  { month: 'Jun', cost: 15000 },
  { month: 'Jul', cost: 10000 },
  { month: 'Aug', cost: 10000 },
  { month: 'Sep', cost: 10000 },
  { month: 'Oct', cost: 8000 },
  { month: 'Nov', cost: 10000 },
  { month: 'Dec', cost: 10000 },
];

function costingStats(costsArray) {
  let maxCost = 0;
  let minCost = 999999999;
  let maxCostMonth = [];
  let minCostMonth = [];

  for (i = 0; i < costsArray.length; i++) {
    if (costsArray[i].cost >= maxCost) {
      maxCost = costsArray[i].cost;
    }
    if (costsArray[i].cost <= minCost) {
      minCost = costsArray[i].cost;
    }
  }
  for (j = 0; j < costsArray.length; j++) {
    if (costsArray[j].cost == maxCost) {
      maxCostMonth.push(costsArray[j].month);
    }
    if (costsArray[j].cost == minCost) {
      minCostMonth.push(costsArray[j].month);
    }
  }

  console.log('Maximum cost of the period:', maxCost);
  console.log('Maximum cost ocurred in: ', maxCostMonth);
  console.log('Minimum cost of the period:', minCost);
  console.log('Minimum cost ocurred in: ', minCostMonth);
}
costingStats(sweetCosts2021);
