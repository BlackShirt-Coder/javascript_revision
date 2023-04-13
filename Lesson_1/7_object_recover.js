let user_info = {
        'name': 'mgmg',
        'age': 20,
        'current_address': 'Taungoo',
        'Live_In': 'Lewe',
        'parent': {
            'father_name': 'U Ba',
            'mother_name': 'Daw Mya',
            'address': 'Yangon'
        },
        'job': [
            'programmer', 'engineer', 'teacher', 'sale lead'
        ],
        'relationship': 'single',
        'earnMoney': '1000000',
        'favourite': {
            'fruits':['apple','banana'],
            'colors':['black','white'],
        }
    }

;
console.log(`${user_info.job[3]} at Nay Pyi Daw`);
console.log(`Favourite Color ${user_info.favourite.colors[1]}`);
console.log('Parent Address '+user_info.parent.address);
console.log(`Relationship ${user_info.relationship}`);