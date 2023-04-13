let user= {
    'name': 'john',
    'age': 20
};
/* first way */
// let user_copy ={};
/*user_copy.name=user.name;
user_copy.age=user.age;
console.log(user_copy);*/

/*second way*/
const user_copy=Object.assign({},user);
console.log(user_copy);