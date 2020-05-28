const desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];
const deskTypes = desks.reduce(
  (acc, desks) => {
    desks.type === "sitting" ? acc.sitting++ : acc;

    desks.type === "standing" ? acc.standing++ : acc;

    return acc;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);

// var deskTypes = desks.reduce(function (previous,current) {
// return
// }, { sitting: 0, standing: 0 });

// const trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

// const totalDistance = trips.reduce((previous, current) => {
//   return (previous += current.distance);
// }, 0);

// console.log(totalDistance);

// const numbers = [10, 20, 30];

// const sum = 50;

// // for (let i = 0; i > numbers.length; i++) {
// //   console.log((numbers[i] += sum));
// // }

// const completeSum = numbers.reduce((sum, number) => {
//   return sum + number;
// }, 0);

// console.log(completeSum);
