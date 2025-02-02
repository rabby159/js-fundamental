const details = [
    {name: "samsung", device: "phone", price: 10000, quality: "mid"},
    {name: "xiaomi", device: "phone", price: 8000, quality: "low"},
    {name: "nokie", device: "phone", price: 11000, quality: "mid"},
    {name: "apple", device: "phone", price: 100000, quality: "high"},
    {name: "google", device: "phone", price: 80000, quality: "high"}
];

function cheapestPhone(phones){
    
    let cheapest = phones[0];
    
    for(const phone of phones){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    };
    return cheapest;
};

const result = cheapestPhone(details);
console.log(result.price);
