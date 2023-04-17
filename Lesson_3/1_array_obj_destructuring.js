function callObj(obj){
    const {name,age,address}=obj;
    console.log(`My name is ${name} and ${age} years old live in ${address}`);
}
let my_info={
    'name':'mgmg',
    'age':22,
    'isSingle':true,
    'address':'Yangon'
};
callObj(my_info);

function my_siblings(arr){
    const [sister,brother]=arr;
    console.log(brother + ' and '+sister+' are my siblings');
}
const siblings=['hla hla','Kyaw Gyi'];
my_siblings(siblings);
console.log(Object.keys(my_info));