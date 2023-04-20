//set
// same value not allow
const set_data=new Set();
set_data.add('mgmg');
set_data.add('aung aung');
set_data.add('aung aung');
/*
set_data.forEach((i)=>console.log(i))
;*/
for(i of set_data){
    console.log(i);
}
console.log(set_data.has('susu'));
console.log(Array.from(set_data));