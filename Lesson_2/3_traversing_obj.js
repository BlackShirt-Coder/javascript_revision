/*
   object for in and for of
   Object().keys()
   Object().values()
 */
let user_info={
    'name':'susu',
    'age':19,
    'gender':'female',
    'email':'susu@gmail.com',
    'phone':'09782910103',
};
console.log(user_info);

/* for in loop =>array and obj can loop  => keys access */
/* for of loop =>array  can loop  => values access */

/* for in style */
for(user in user_info){
    console.log(`${user} ${user_info[user]}`);
}
console.log("\n");
/* for of style */
let keys=Object.keys(user_info);
let values=Object.values(user_info);
/*console.log(keys);
console.log(values);*/

for (let user of keys) {
    console.log(`${user} = ${user_info[user]}`);
}

/*
let fruits=['mango','orange','banana'];
for(fruit of fruits){
    console.log(fruit);
}*/
