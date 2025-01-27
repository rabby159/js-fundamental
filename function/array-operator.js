
//Sum of a all number

function sumOfAllNumber(numbers){
    let sum = 0;
    for(let number of numbers){
        sum = sum + number;
    }
    return sum;
};

const nums = [21, 24, 20, 67];
const sum = sumOfAllNumber(nums)
console.log(sum);