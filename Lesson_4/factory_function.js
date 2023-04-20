/* factory function */
function call_me(name, age, address) {
    const obj = {
        name,
        age,
        address,
        aboutMe: function()
    {
        console.log(`Hello I'm ${name} and ${age} years old and live in ${address}`);
    }
}
return obj;
}

let obj1 = {
    'name': 'mgmg',
    'age': 23,
    'address': 'Yangon'
};

// console.log(obj1);
let obj2 = {
    'name': 'zaw zaw',
    'age': 20,
    'address': 'Mandalay'
};
// console.log(obj2);

console.log(call_me('susu',20,'Taungoo'));
console.log(call_me('kyaw gyi',40,'Bago'));
console.log(call_me('bo bo',23,'Mandalay'));
console.log(call_me('ko ko',18,'Taungyi'));