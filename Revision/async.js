async function hey(){
 const git=await fetch('https://api.github.com');
 const data= await git.json();
 return data;
}
hey().then((res)=>console.log(res))
    .catch((err)=>console.log(err.message));