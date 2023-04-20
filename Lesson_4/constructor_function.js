function UserFactory(userId, userName, userEmail) {
    
    this.id = userId;
    this.name = userName;
    this.email = userEmail;

    function get_info() {
        console.log(`Id ${this.id} is ${this.name} `);
    }
}

let user_one = new UserFactory('1001', 'Kyaw Myo', 'kokyaw@gmail.com');
console.log(user_one);
let user_two = new UserFactory('3892', 'May Thu', 'maythu@gmail.com');
console.log(user_two);