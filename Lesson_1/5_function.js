/* Function */
function sayHi(){
    return 'Hi';
}
console.log(sayHi());
function sayHello(name){
    return 'Hello '+ name;
}
console.log(sayHello('mgmg'));
console.log(sayHello('aung aung'));
console.log(sayHello('su su'));

// Arrow function
let nkl=()=>{
    console.log('nay kg lar');
};
nkl();
var naykglar=(name)=>{
    console.log('Nay kg Lar '+name +' Yay');
};
naykglar('Su Su');