/*
function animal_sound(animal, callback) {
    callback(animal);
}

function cat_sound(animal) {
    console.log(animal+'Sound Meow Meow ...');
}

function dog_sound(animal) {
  setTimeout(()=>   console.log(`${animal} sound Wog Wog ...`),2000);
}
const dog=animal_sound('dog',dog_sound);
console.log(dog);

*/
/*
 function greeting(name) {
    alert(`Hello, ${name}`);
}

function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
}

processUserInput(greeting);

 */

// callback
// fetchUser('92101',function (user) {
//     console.log(user);
// });

function fetchUser(userId,callback){
    setTimeout(function () {
        console.log('Hi my name is ariyan');
        const fetchedUser={
            'id':userId,
            'name':'kazi',
            'email':'kazi@gmail.com'
        };
        callback(fetchedUser);
    },2000);
}
function sentEmail(email,callback){
    console.log("Email is Sending!");
    const response ={
      success:true
    };
    const name='mgmg';
   callback(name,response);
}
sentEmail('susu@gmail.com',function(res,data){
    console.log(res);
});


