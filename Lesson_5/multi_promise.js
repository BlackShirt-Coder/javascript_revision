const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(new Error('Something went wrong!'));

    },1000);
});
const promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(100);

    },1000);

});
Promise.all([promise1,promise2]).then(function (res) {
    console.log(res);
})
    .catch(function (err) {
        console.log(err);
    });