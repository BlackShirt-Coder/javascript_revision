/* Difference between let and const*/
let name='mgmg';
const age=20;
console.log('before change: ',name);
console.log('before change:',age);
name='susu';
console.log('after change',name);
// age=34;
// console.log('after change',age);
let  obj1={ //const doesn't change this place
    name:'kyaw kyaw',
    age:33,
    job:'it man'
};
obj1={
    name:'susu',
    age:20,
    job:'teacher'
};
console.log(obj1);
let  fruits=['mango','apple','orange'];
fruits=['banana'];
console.log(fruits);