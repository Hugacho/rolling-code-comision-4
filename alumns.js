let cantidad = window.prompt('Ingresa la cantidad de integrantes de tu familia');
const family = [];
for(let i = 0; i < cantidad; i++) {
    let name = window.prompt('Ingresa tu nombre');
    let lastname = window.prompt('Ingresa tu apellido');
    let email = window.prompt('Ingresa tu email');
    let hasHobbies = window.prompt('Indique la cantidad de hobiies');
    const hobbies = [];
    if (hasHobbies !== '0') {
        for (let j = 0; j < hasHobbies; j++) {
            let hobbie = window.prompt('Nombre del hobbie');
            hobbies[j] = hobbie;
        }
    }
    family[i] = {
        nombre: name,
        apellido: lastname,
        email: email
    };
    if (hobbies.length !== 0) {
        family[i].hobbies = hobbies;
    }
}

//console.log(family);


//console.log(alumns);

// const fruits = ['Banana', 'Manzana', 'Pera', 'Kiwi'];
// fruits[fruits.length] = 'Naranja';
// console.log(fruits);