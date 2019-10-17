const a = (function() {
    function f1() {
        console.log('fn1');
    }
    function f2() {
        f3();
        console.log('fn2');
    }
    function f3() {
        console.log('fn3');
    }
    return {
        fn1: f1,
        fn2: f2,

    }
})();
// a.fn2();


const car = ((brand) => {
    const model = 2008;
    const arrancar = status => {
        if (status) {
            console.log('Arrancar el auto');
        } else {
            trucoDeArranque();
        } 
    }
    const acelerar = velocidad => {
        console.log('Acelerar hasta ', velocidad);
    }
    const frenar = () => {
        console.log('Frenar');
    }
    const trucoDeArranque = () => {
        console.log('Arrancar con la maña');
    }
    return {
        brand,
        arrancar,
        acelerar,
        frenar
    }
})('Ford');

car.arrancar(false);
car.acelerar(90);
car.frenar();
// console.log(car.brand);


const handleUser = (() => {
    const doLogin = (user, password) => {
        if (user === 'maybar' && password === '1234') {
            redirectToAdmin();
        } else {
            showLoginError();
        }
    }
    const doLogout = () => {
        console.log('Cerrar sesión');
    }
    const redirectToAdmin = () => {
        console.log('Redireccionar a la pantalla de admin');
    }
    const showLoginError = () => {
        console.log('Los datos de acceso son incorrectos');
    }
    return {
        doLogin,
        doLogout
    };
})();

// handleUser.doLogin('matias', '1234');
// handleUser.doLogin('maybar', '1234');


const TinchoDateLibrary = (() => {
    const getDate = () => {

    }
    const getHour = () => {

    }
    const getMonth = () => {

    }
    const getAge = (fecha) => {
        const hoy = new Date();
        const cumpleanos = new Date(fecha);
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        const m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--; // edad = eadad - 1;
        }
        return edad;
    }

    return {
        getAge
    }
})();

const edad = TinchoDateLibrary.getAge('1996-12-24');
// console.log(edad);


const shop = (() => {
    const add = (product, cant = 1) => {
        setItem('prod', [
            {
                title: 'Leche',
                price: 100,
                cant: cant
            },
            {
                title: 'Manteca',
                price: 70,
                cant: cant
            }
        ]);
        console.log('Agregar producto!');
    }
    const remove = (product) => {

    }
    const confirm = (products) => {

    }
    const change = (product, cant) => {

    }
    const paymentMethod = () => {

    }
    const getItem = (key) => {
        return JSON.parse(localStorage.getItem(key));
    }
    const setItem = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }
    return {
        add,
        remove,
        confirm,
        change,
        paymentMethod,
        getItem
    }
})();

const handleView = ((shop, appId) => {
    const createElement = () => {
        const myButton = document.createElement('button');
        myButton.type = 'button';
        myButton.innerText = 'Agregar al carrito';
        myButton.onclick = shop.add;
        return myButton;
    }
    const showProducts = () => {
        console.log(shop.getItem('prod'));
    }
    const render = () => {
        const myApp = document.getElementById(appId);
        const btn = createElement();
        myApp.appendChild(btn);
    }
    return {
        render,
        showProducts
    }
})(shop, 'app');

handleView.render();
handleView.showProducts();



const human = (() => {
    let ojos, pelo, piel;
    const nacer = (a, b, c) => {
        ojos = a;
        pelo = b;
        piel = c;
    }
    return {
        nacer
    }
})();

human.nacer('negros', 'amarillo', 'blanco');




