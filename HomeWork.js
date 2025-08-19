function mySome(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

function myEvery(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      return false;
    }
  }
  return true;
}

let nums = [1, 2, 3, 3, 3];

console.log(mySome(nums, 2)); // true
console.log(mySome(nums, 5)); // false

console.log(myEvery(nums, 3)); // false
console.log(myEvery([3,3,3], 3)); // true
