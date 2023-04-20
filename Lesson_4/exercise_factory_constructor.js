// factory
function get_info(city, zip_code, state) {
    const obj = {
        city,
        zip_code,
        state
    };
    return obj
}

let address_one = get_info('Beijing', '100000', 'China');
console.log(address_one);
let address_two = get_info('Slab', '92233', 'USA');
console.log(address_two);

let obj1 = {
    'city': 'Slab',
    'zip_code': '92233',
    'state': 'USA'
};
let obj2 = {
    'city': 'Beijing',
    'zip_code': '100000',
    'state': 'China'
};

/* constructor */
function HomeAddress(city,zip_code,state){
    this.city=city;
    this.zip_code=zip_code;
    this.state=state;
    return this;
}
let home_address_1=new HomeAddress('New York','39202','California');
let home_address_2=new HomeAddress('Shanghai','200000','China');
console.log(home_address_1);