// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    func(arrOfArr[i]);
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max = -Infinity, min = Infinity, difference;

  for (let i = 0; i < arr.length; i++) {
    arr[i] > max ? max = arr[i] : false;
    arr[i] < min ? min = arr[i] : false;
  }

  difference = Math.abs(max -min);

  return difference;
}
