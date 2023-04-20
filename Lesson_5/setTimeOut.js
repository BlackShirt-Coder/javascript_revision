const first = 'hello';

function second() {
    setTimeout(function () {
        console.log('say hi after 2 second');
    }, 2000)
}
const third = 'this is third command';
console.log(first);
console.log(second());
console.log(third);
