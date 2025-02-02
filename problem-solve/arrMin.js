//find min number in array

const height = [21, 34, 66, 98, 34, 9, 35];

function arrMin(numbers) {
  let min = numbers[0];

  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const result = arrMin(height);
console.log(result);
