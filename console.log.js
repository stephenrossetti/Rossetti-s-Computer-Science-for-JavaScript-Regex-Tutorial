const email = 'rossetti.stephen@gmail.com';
const regex = email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);

console.log(regex[0]);
console.log(regex[1]);
console.log(regex[2]);
console.log(regex[3]);
console.log(regex[4]);