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
    // console.log('Entré al input :)');
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
    // console.log('Salí del elemento', text.value);
}

const fnInput = () => {
    const text = document.getElementById('text');
    document.getElementById('result').innerHTML = text.value;
    // console.log('on input', text.value);
}


const mostrarAlert = () => {
    alert('Hola mundo');
}

mostrarAlert();

function doFocus() {
    console.log('Hiciste focus!');
    const t = document.getElementById('my-input');
    const p = document.getElementById('my-error');
    t.style.backgroundColor = 'white';
    t.style.border = '1px solid black';
    p.style.display = 'none';

}

const doBlur = function() {
    console.log('Saliste del input!');
    const t = document.getElementById('my-input');
    const p = document.getElementById('my-error');
    if(t.value === '') {
        t.style.backgroundColor = 'orange';
        t.style.border = '1px solid red';
        p.style.display = 'block';
    }
}

const doInput = () => {
    const t = document.getElementById('my-input');
    console.log(t.value);
}
