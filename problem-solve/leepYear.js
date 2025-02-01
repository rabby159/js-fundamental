//find leapYear

function isLeapYear(years){
    if( years % 4 === 0){
        return true;
    } else{
        return false;
    }
};

const result = isLeapYear(2052);
console.log(result);