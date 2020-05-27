//pluck function: pluck should accept an array and a string representing a property name and
//return an array containing that property from each object

// const cars = [
//   { make: "Chevrolet", model: "cavalier" },
//   { make: "honda", model: "civic" },
// ];

// function pluckCars(array, property) {
//   return array.map((arr) => {
//     return arr[property];
//   });
// }

// console.log(pluckCars(cars, "make"));

// const paints = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// function pluck(array, property) {
//   return array.map(function (element) {
//     return element[property];
//   });
// }

// console.log(pluck(paints, "color"));

const paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];

function pluck(array, property) {
  return array.map((arr) => {
    return arr[property];
  });
}

console.log(pluck(paints, "color"));

// console.log(colors);

// function pluck(array, key) {
//   return array.map((o) => o[key]);
// }
// const trips = [
//   { distance: 34, time: 10 },
//   { distance: 90, time: 50 },
//   { distance: 59, time: 25 },
// ];

// const speeds = trips.map((trip) => {
//   return trip.distance / trip.time;
// });

// console.log(speeds);

// const images = [
//   { height: "34px", width: "39px" },
//   { height: "54px", width: "19px" },
//   { height: "83px", width: "75px" },
// ];

// const heights = images.map((image) => image.height);
// console.log(heights);
// const cars = [
//   {
//     model: "Buick",
//     price: "Cheap",
//   },
//   { model: "Camaro", price: "Medium" },
//   { model: "bmw", price: "expensive" },
// ];

// const prices = cars.map((car) => {
//   return car.price;
// });

// const models = cars.map((car) => car.model);

// console.log(prices);
// console.log(models);

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(element * 2);
// }

// numbers.map((number) => {
//   doubledNumbers.push(number * 2);
// });
// const doubles = numbers.map((number) => number);

// doubles.push(6);

// console.log(doubles);
