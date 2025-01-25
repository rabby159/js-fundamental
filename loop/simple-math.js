//give me the list of 1 to 30 divisible of 5

for(let i = 0; i <= 30; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

//give me the list of 1 to 30 divisible of 3 or 5
for(let i =0; i <= 30; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}

//give me the list of 1 to 30 divisible of 3 and 5
for(let i =0; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}