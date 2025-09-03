function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) return false;
  }
  return true;
}

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return true;
  }
  return false;
}

function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) result.push(array[i]);
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

console.log(every(numbers, n => n > 0));   // true
console.log(every(numbers, n => n < 3));   // false

console.log(some(numbers, n => n === 3));  // true
console.log(some(numbers, n => n > 10));   // false

console.log(filter(numbers, n => n % 2 === 0)); // [2, 4]
console.log(filter(numbers, n => n > 3));       // [4, 5]

const humans = [
  { age: 25, weight: 70 },
  { age: 32, weight: 80 },
  { age: 18, weight: 60 },
  { age: 45, weight: 90 },
  { age: 29, weight: 75 }
];

const sumReduce = humans.reduce(
  (acc, human) => ({
    age: acc.age + human.age,
    weight: acc.weight + human.weight
  }),
  { age: 0, weight: 0 }
);

console.log('Сумма через reduce:', sumReduce);

let ageSum = 0, weightSum = 0;
for (let i = 0; i < humans.length; i++) {
  ageSum += humans[i].age;
  weightSum += humans[i].weight;
}
console.log('Сумма без reduce:', { age: ageSum, weight: weightSum });
