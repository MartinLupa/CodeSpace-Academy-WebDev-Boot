const user = { name: "Martin", age: 32, address: "Armengual de la Mota" };
const contactInfo = { phone: 644644644, email: "martin@email.com" };
const completeInfo = { ...user, ...contactInfo, address: "Freyre 1431" };

console.log(completeInfo);

const car = {
  brand: "Audi",
  model: "Q7",
  plateNumber: "08188BHG",
  color: "white",
};
const { brand, model, ...rest } = car;
console.log(brand, model);
console.log(rest);
