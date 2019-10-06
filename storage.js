/*
const car = {
    color: 'red',
    model: 2008,
    brand: 'Ford',
    isSedan: true,
    speed: (a, b) => {
        console.log('Acelereeeee!!!', 1, 4);
    }
}
car.speed(1, 4);
*/

localStorage.setItem('userName', 'Matías');
let userName = localStorage.getItem('userName'); // Matías
localStorage.setItem('userLastname', 'Aybar');
const userLastname = localStorage.getItem('userLastname');
// console.log(userName, userLastname);
localStorage.removeItem('userName'); // Quito Matías del localStorage
// userName = localStorage.getItem('userName'); // null
// console.log(userName, userLastname);

localStorage.clear();

// console.log(localStorage.getItem('userName'), localStorage.getItem('userLastname'));


const alumn = {
    name: 'Andrea',
    lastname: 'Puentes',
    email: 'andrea.puentes@gmail.com'
};

const formatToSave = JSON.stringify(alumn);
localStorage.setItem('info', formatToSave);
const info = localStorage.getItem('info');
const data = JSON.parse(info);
console.log(typeof alumn);
console.log(typeof formatToSave);
console.log(typeof info);
console.log(typeof data);