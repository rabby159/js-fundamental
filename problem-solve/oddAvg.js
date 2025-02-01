//find odd average 

function oddAverage(numbers){           //function
    let odds = [];
    for(number of numbers){             //loop
        if(number % 2 === 1){           //condition
            odds.push(number)
        }
    }

    let sum = 0;
    for(odd of odds){
        sum = sum + odd;

    }
    // console.log("Total Odds Sum:", sum);

    const count = odds.length;
    // console.log("Total Odds No Count:", count);
    const avg = sum / count;
    return avg;
};

const arr = oddAverage([2, 1, 5, 4, 7, 0, 3]);
console.log("Total Odds No Average:", arr);