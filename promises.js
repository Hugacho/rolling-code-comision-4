// Sin promesa
const data = () => {
    let i = 0;
    setTimeout(() => {
        i = 5;
        // console.log(i);
    }, 2000);
    return i;
}

const r = data();

console.log(r);

// Con promesas

const p = new Promise((resolve, reject) => {
    resolve();
});
// console.log(p);

// Timer
const timer = () => {
    return new Promise((resolve, reject) => {
        let k = 0;
        setTimeout(() => {
            k = 5;
            resolve(k);
        }, 2000);
    });
}

const t = timer();
t.then(k => {
    console.log('Promesa resuelta', k);
}).catch(error => {
    console.log('Error en promesa', error);
});

//
const d = window.fetch('https://jsonplaceholder.typicode.com/comments');
console.log(d);

d.then(response => {
    const info = response.json();
    info.then(comments => {
        console.log(comments);
    });
    console.log(info);
});
