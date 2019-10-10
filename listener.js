const btn = document.getElementById('btn');
const onClickFn = () => {
    console.log('Hiciste click');
}
btn.addEventListener('click', onClickFn);
btn.removeEventListener('click', onClickFn);
btn.addEventListener('mouseover', () => {
    console.log('Mouse over');
});
btn.addEventListener('mouseleave', () => {
    console.log('Mouse leave');
});
btn.addEventListener('mousedown', () => {
    console.log('Mouse down');
});
btn.addEventListener('mouseup', () => {
    console.log('Mouse up');
});

/////////////////////////

const test = (param) => {
    const a = [1, 4, 6, 2];
    param(a, 'Holis :)');
}

const myParam = (p, s) => {
    console.log('Hola mundo', p, s);
};

// test(myParam);
a();
const a = () => {
    console.log('Hello World!');
}



