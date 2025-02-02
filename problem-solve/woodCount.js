// Total wood need for my biya


function findTotalWood(chairQty, tableQty, bedQty){
    const chair = 10;
    const table = 15;
    const bed = 20;

    const totalLWoodForChair = chairQty * chair;
    const totalLWoodForTable = tableQty * table;
    const totalLWoodForBed = bedQty * bed;

    const myBiyeTotalWoodNeed = totalLWoodForBed + totalLWoodForChair + totalLWoodForTable;
    return myBiyeTotalWoodNeed;
};

const result = findTotalWood(4, 1, 1);
console.log("Total wood need: ", result);