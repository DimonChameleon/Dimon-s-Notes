// 1) 
const str = '1,2,3,4,5';
const arrNumbers = str.split(',').map(Number);
console.log('Задание 1:', arrNumbers); // [1, 2, 3, 4, 5]

// 2) 

// map
const tripledMap = arrNumbers.map(n => n * 3);
console.log('Задание 2 (map):', tripledMap);

// for
const tripledFor = [];
for (let i = 0; i < arrNumbers.length; i++) {
  tripledFor.push(arrNumbers[i] * 3);
}
console.log('Задание 2 (for):', tripledFor);

// 3) 

const inputStr = prompt('Введите коэффициенты через запятую:');
const inputArrStr = inputStr?.split(',') ?? [];

// а) 
const inputNums = inputArrStr
  .map(s => Number(s.trim()))
  .filter(n => !isNaN(n));

// в) 
const invalidElems = inputArrStr.filter(s => isNaN(Number(s.trim())));
if (invalidElems.length > 0) {
  console.warn('Игнорированы некорректные значения:', invalidElems);
}

// б)
const sumKoefs = inputNums.reduce((acc, val) => acc + val, 0);

console.log('Задание 3 — сумма корректных коэффициентов:', sumKoefs);
