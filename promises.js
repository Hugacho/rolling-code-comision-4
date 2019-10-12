const timer = () => {
    let i = 0;
    setTimeout(() => {
        i = 5;
    }, 100); // milisegundos
    return i;
}

const t = timer();
// console.log(t);

const p = new Promise((resolve, reject) => {
    const j = true;
    if (j) {
        resolve(':)');
    } else {
        reject(':(');
    }
});

// Muchas líneas de código blablabla ... 

p.then(response => {
    // console.log(response);
}).catch(error => {
    console.log(error);
});

// Ejemplo con promesas

const timer2 = () => {
    let i = 0;
    const r = new Promise((resolve, reject) => {
        setTimeout(() => {
            i = 5;
            resolve(i);
        }, 3000);
    });
    return r;
}
const t2 = timer2();
t2.then(x => {
    console.log(x);
});

// Ejemplo
const request = window.fetch('https://jsonplaceholder.typicode.com/comments');

request.then(response => {
    const data = response.json();
    data.then(comments => {
        // console.log(comments);
    });
});

const imgResquest = window.fetch('https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/12/reino-unido-venta-cachorros-perros-gatos-tiendas-lucy-law.jpg');
imgResquest.then(response => {
    const b = response.blob();
    b.then(d => {
        const o = window.URL.createObjectURL(d);
        console.log(o);
        document.getElementById('img').src = o;
    });
});