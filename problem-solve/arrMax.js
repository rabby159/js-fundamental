//find max number in array

const height = [21, 34, 66, 98, 34, 99, 35];

function getMax(numbers){

    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
};
const result = getMax(height);
console.log(result);