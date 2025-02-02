//find max number of 3

const selim = 290;
const roni = 310;
const jubayer = 330;

function  findMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log("I am old man -- Selim");
    } 
    else if(num2 > num1 && num2 > num3){
        console.log("ami vai always pinic ee thakte pochondo kori -- Roni");
    }
    else{
        console.log("ami amr khandani batpari business aa always active -- Jubayer");
    }
};

const result = findMax(selim, roni, jubayer);