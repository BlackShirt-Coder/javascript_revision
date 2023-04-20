console.log(window.localStorage);
localStorage.setItem('name','mgmg');
localStorage.setItem('password','2320');

localStorage.setItem('age',29);
const name=localStorage.getItem('name');
const age=localStorage.getItem('age');
const pw=localStorage.getItem('password');
console.log(name);
console.log(age);
console.log(pw);
localStorage.removeItem('password');
console.log(localStorage.length);


/* session storage
*  session is out or browser close all gone
* */

console.log(window.sessionStorage);
sessionStorage.setItem('name','mgmg');
sessionStorage.setItem('age',29);
sessionStorage.setItem('job','programmer');
console.log(sessionStorage.getItem('name'));
console.log(sessionStorage.getItem('job'));
console.log(sessionStorage.length);
sessionStorage.removeItem('name');
sessionStorage.clear();
const obj=[{
    'hello':'world',
    'donal':'Duck'
}];
sessionStorage.setItem('obj',JSON.stringify(obj));
sessionStorage.getItem('obj');