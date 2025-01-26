
function isEven(num1){
    if(num1 % 2 === 0){
        return true;
    }
    else{
        return false;
    }
};

const resultEven = isEven(5);
const resultEven2 = isEven(10);

console.log(resultEven, resultEven2);