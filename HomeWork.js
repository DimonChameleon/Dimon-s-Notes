// 1)
const inputNums = [1, 2, 3, 4, 5];

// с reduce
const sumKoefs = inputNums.reduce((acc, val) => acc + val, 0);
console.log("Сумма с reduce:", sumKoefs);

// без reduce
let sumKoefs2 = 0;
for (const num of inputNums) {
  sumKoefs2 += num;
}
console.log("Сумма без reduce:", sumKoefs2);
// 2)
const humans = [
  { age: 25, weight: 70 },
  { age: 30, weight: 80 },
  { age: 20, weight: 60 }
];

// с reduce
const total = humans.reduce(
  (acc, h) => {
    acc.age += h.age;
    acc.weight += h.weight;
    return acc;
  },
  { age: 0, weight: 0 }
);
console.log("Сумма с reduce:", total);

// без reduce
let ageSum = 0;
let weightSum = 0;

for (const h of humans) {
  ageSum += h.age;
  weightSum += h.weight;
}

console.log("Сумма без reduce:", { age: ageSum, weight: weightSum });
