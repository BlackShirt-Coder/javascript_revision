/* object create, update , delete */

let user_info={
    'name':'mgmg',
    'age':23
};
/* create */
user_info.job='software_developer';
user_info.address='Mandalay';
console.log(user_info);

// update
user_info['job']='web developer';
user_info['age']=32;
console.log(user_info);

user_info.isSingle=true;
console.log(user_info);
/* delete */
delete user_info.isSingle;
console.log(user_info);
