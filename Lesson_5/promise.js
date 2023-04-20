const url=fetch('https://api.github.com/users');
console.log(url);
const promise=new Promise((resolve,reject)=>{
    reject(new Error('There is something wrong'));
});
promise.then((res)=>console.log(res))
    .catch((err)=>console.log(err));