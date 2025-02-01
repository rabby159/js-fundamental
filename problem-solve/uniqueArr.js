//make unique array element

const arr = ["abul", "babul", "dabul", "rabul", "babul", "rabul", "cabul"];

function isUnique(array) {
  let unique = [];

  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const array = isUnique(arr);
console.log(array);
