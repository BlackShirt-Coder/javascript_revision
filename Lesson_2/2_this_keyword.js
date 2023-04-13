/* this keyword */
let obj={
    'name':'mgmg',
    'age':20,
    'job':'Programmer',
    'friends':['kyaw kyaw','Devis','John'],
    'favColor':null,
    'calculateAge':function () {
        console.log(`Hi I'am ${this.name} ${this.age} years old ${this.job} `)//template literal;
    }
}
obj.calculateAge();