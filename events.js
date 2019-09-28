/*
function suma(a, b) {
    return a + b;
}

const suma = function(a, b) {
    return a+ b;
}

const suma = (a, b) => {
    return a + b;
}

const suma = (a, b) => a + b;

const b = 3;
const a = 1;
const r = suma(b, a);
const k = suma(1, 8);

console.log(r + k);
*/
const runAlert = () => {
    alert('Hola mundo');
}

function fnFocus() {
    console.log('Entré al input :)');
}

const fnBlur = function() {
    const text = document.getElementById('text');
    const error = document.getElementById('error');
    if(text.value === '') {
        text.style.border = '1px solid red';
        error.style.display = 'block';
    } else {
        text.style.border = '1px solid grey';
        error.style.display = 'none';
    }
    console.log('Salí del elemento', text.value);
}

const fnInput = () => {
    const text = document.getElementById('text');
    document.getElementById('result').innerHTML = text.value;
    console.log('on input', text.value);
}