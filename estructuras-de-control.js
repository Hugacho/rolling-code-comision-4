const alumn = '1';


if (alumn === 'Martin') {
    console.log('Hola Martin');
} else if (alumn === 'Fiorella') {
    console.log('Hola Fiorella');
} else if (alumn === 'Andrea') {
    console.log('Hola Andrea');
} else {
    console.log('Hola al resto');
}


switch (alumn) {
    case 'Martin':
        console.log('Hola Martin');
        break;
    case 'Fiorella':
        console.log('Hola Fiorella');
        break;
    case 'Andrea':
        console.log('Hola Andrea');
        break;
    default:
        console.log('Hola al resto');
        break; 
}

/*
PEDIR TRES VALORES POR PANTALLA: TIPO DE OPERACIón (SUMA, RESTA, DIVBISI´ON, MULTIPLICACIÓN), PRIMER VALOR A OPERAR Y SEGUNDO VALOR A OPERAR. CON UN SWITCH EVALUAR EL TIPO DE OPERACION.
*/

const operacion = prompt('Que tipo de operacion desea realizar?');
const v1 = prompt('Ingrese primer valor');
const v2 = prompt('Ingrese segundo valor');

switch (operacion) {
    case 'suma':
        console.log(v1 + v2);
        break;

    default:
        break;
}
