let obj={
    'mgmg':200000,
    'aung aung':180000,
    'su su':230000,
    'nu nu':350000
};
let total=0;
function getTotal(){
    for(salary of Object.values(obj)){
        total+=salary;
    }
    return total;
}


delete obj['aung aung'];
console.log(obj);
console.log(getTotal());
