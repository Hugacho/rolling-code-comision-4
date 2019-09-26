// console.log(window.screen);
// window.print();
// const popup = window.open('http://google.com', '', 'width=400,height=400');

// popup.close();

window.onresize = () => {
    // console.log(window.innerWidth);
}

window.setTimeout(() => {
    // popup.close();
    // window.clearInterval(interval);
}, 3000);

const interval = window.setInterval(() => {
 // console.log(new Date().toLocaleTimeString());
}, 1000);


const request = window.fetch('https://jsonplaceholder.typicode.com/comments');

request.then((response) => {
    response.json()
        .then((data) => {
            for(let i = 0; i < data.length; i++) {
                console.log(data[i]);
                createCard(data[i].name, data[i].body);
            }
        })
        .catch(error => {});
});


// document.documentElement.childNodes[2].childNodes[3].childNodes[1].childNodes[3].childNodes[1].innerText = 'Hola mundo'

const li = document.getElementsByTagName('li')[1];
li.id = 'esto-es-un-id';
li.className = 'esta-es-una-clase';
li.style.backgroundColor = 'red';
li.innerHTML = 'Hola Mundo';

// document.getElementById('text').innerHTML = '<h2>Chau Mundo!</h2>'; 

function createCard(name, body) {
    const app = document.getElementById('app');
    const img = document.createElement('img'); // 1. Crear elemento
    img.src = 'https://imagenes.milenio.com/YONeZ5-2cQu0TH_W2iPiQ_FkzbM=/958x596/https://www.milenio.com/uploads/media/2018/12/25/quieran-comprar-cachorro-acudir-criaderos.jpg'; // 2. Agregar propiedad
    img.className = 'card-img-top'; // 3. Agregar clase
    const container = document.createElement('div');
    container.appendChild(img);
    container.className = 'card col-6';
    const title = document.createElement('h1');
    title.innerText = name;
    const p = document.createElement('p');
    p.innerText = body;
    container.appendChild(title);
    container.appendChild(p);
    app.appendChild(container);
}






