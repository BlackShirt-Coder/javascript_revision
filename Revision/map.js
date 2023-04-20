// map
//key values
const map_value=new Map();
map_value.set('name','mgmg');
map_value.set('age','34');
map_value.set('job','programmer');
console.log(map_value);
const ary=Array.from(map_value);
console.log(ary);
map_value.forEach((i)=>console.log(i));
console.log(map_value.keys());
console.log(map_value.values());
for(key of map_value.keys()){
    console.log(key);
}
console.log("\n");
for(val of map_value.values()){
    console.log(val);
}