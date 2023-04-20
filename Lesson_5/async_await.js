/*
function fun_one(){
    console.log('hello hello');
}
async function fun_two(){
    const one=await fun_one();

}
fun_two();*/

async function get_profile(){
    const url=await fetch('https://api.github.com/users');

    const profile =await url.json();
    console.log(profile);
}
get_profile();