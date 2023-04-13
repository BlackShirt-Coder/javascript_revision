/* object destructuring*/
let user_info={
    'name':'john',
    'age':20,
   'aboutMe':function (name) {
       console.log(`Hi I'm ${this.name}`);
   },
    'friends':['Justin','Austin'],
    'isSingle':true,
    'family':{
        'parents':{
            'father':'Johny',
            'mother':'Susan',
        },
        'sibling':['Rosy','Bobby']
    }
};
let {name,age,aboutMe,friends,isSingle,family}=user_info;
console.log(name);
console.log(age);
let [a,b]=friends;// array destructuring
console.log(b);
console.log(isSingle);
const {parents,sibling}=family;
console.log(parents.mother);
const [sis,bro]=sibling;
console.log(sis);
console.log(bro);