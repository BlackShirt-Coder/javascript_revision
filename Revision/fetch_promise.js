//fetch using promise

const url ='https://api.github.com';
function get_user(url){
    const data=fetch(url);
    const promise=new Promise((resolve,reject)=>{
        resolve(data);
    });
    return promise;
}

get_user(url).then((res)=>res.json())
    .then((profile)=>console.log(profile))
.catch((err)=>console.log(err));