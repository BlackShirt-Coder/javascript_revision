let fruit=new Set();
fruit.add('mango');
fruit.add('orange');
fruit.add('apple');
let ans=fruit.has('mango');
// console.log(ans);
fruit.add('banana');
// console.log(fruit.size);
fruit.add({'color':'yellow'});
/*fruit.clear();*/

for(data of fruit){
    console.log(data);
}
