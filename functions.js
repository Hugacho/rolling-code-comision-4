function nombreDeLaFuncion(name, lastname = '') {
    console.log('Hola', name, lastname);
}

/*
nombreDeLaFuncion('Matias', 'Aybar');
nombreDeLaFuncion('Hugo');
nombreDeLaFuncion('Joaquin');
nombreDeLaFuncion('Fede', 'Soria');
*/


function sum(a, b) {
    //console.log(a + b);
    const s = a + b;
    return s;
}

const r1 = sum(Math.PI, Math.random()); // 2
const r2 = sum(2, 2); // 4
const r3 = sum(2.45, 45.11);
const r4 = sum('hola', 'mundo');


// const n1 = prompt('Ingrese el primer valor');
// const n2 = prompt('Ingrese el segundo valor');
//alert(parseFloat(n1) + parseFloat(n2));

// console.log(Math.sqrt(9));


/*
PEDIR TRES VALORES POR PANTALLA: TIPO DE OPERACIón (SUMA, RESTA, DIVBISI´ON, MULTIPLICACIÓN), PRIMER VALOR A OPERAR Y SEGUNDO VALOR A OPERAR. CON UN SWITCH EVALUAR EL TIPO DE OPERACION.
*/
/*
const operacion = prompt('Que tipo de operacion desea realizar?');
const v1 = prompt('Ingrese primer valor');
const v2 = prompt('Ingrese segundo valor');

let result = '';

switch (operacion) {
    case 'suma':
            result = (parseFloat(v1) + parseFloat(v2));
        break;
    case 'division':
            result = (parseFloat(v1) / parseFloat(v2));
        break;

    default:
            result = ('La operación indicada no existe.');
        break;
}

// alert(result);
*/

// Module
const myModule = (function () {
    myFunction1 = () => {
        console.log('Hello World');
    }
    myFunction2 = () => {
        console.log('Hello World');
    }
    return {
        myFunction1: myFunction1
    }
}());

myModule.myFunction1();

// Literals
const calculator = {
    suma: (a, b) => {
        return a+ b;
    },
    resta: (a, b) => {
        return a - b;
    },
    multiplicacion: (a, b) => {
        return a * b;
    },
    crazyMethod: n => {
        console.log(calculator.resta);
    }
}
const resSum = calculator.suma(1, 5);
const crazyResult = calculator.crazyMethod(6);
console.log(resSum, crazyResult);


const test = (callback) => {
    // json
    callback(4);
}

test((n) => {
    console.log('Soy el callback!!!', n);
});

