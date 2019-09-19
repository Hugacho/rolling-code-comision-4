var num1 = 10;
var num2 = 21;
var sum = num1 + num2;
var prod = num1 * num2;
// console.log(sum, prod);

var name1 = 'Hugo';
var name2 = "Melisa \"Meli\" Vanina";
var name3 = 'D\'Alessandro';
var space = ' ';
var name4 = name1 + space + name2 + space + name3;

// console.log(name4);

var n1 = 4;
var n2 = 5;
var s1 = n1 + n2;
var p = 'true';
// console.log(typeof p);

var text = document.getElementById('text');
// text.innerHTML = 'Hola mundo';

setTimeout(() => {
    // document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
}, 3000);

var fruits = ['Banana', 'Naranja', 'Mandarina', 'Kiwi', 'Anana'];
var numbers = [4, 5, 90, 1, 6];
var others = [
    8,
    'Gato',
    false,
    true,
    [1, 2, 4,
        [
            45, 6, 3, [123, [900]]
        ]
    ],
    'Otra cadena',
    fruits,
    numbers
];
// console.log(others[4][3][3][1][0]);
// console.log(typeof others);

var martin = {
    name: 'Martin',
    lastname: 'Barros',
    age: 32,
    contact: {
        email: 'martinbarros86@gmail.com',
        tel: 3814121212
    }
};

var alumnos = [
    {
        name: 'Martin',
        lastname: 'Barros',
        email: 'martinbarros86@gmail.com',
        hobbies: ['futbol', 'voley'],
        family: [
            
            {
                name: 'Jose',
                rol: 'padre'
            },
            {
                name: 'Maria',
                rol: 'madre'
            }
        ]
    },
    {
        name: 'Andrea',
        lastname: 'Puentes',
        email: 'andy@gmail.com',
        hobbies: ['rugby', 'pato'],
        family: [
            
            {
                name: 'Alberto',
                rol: 'padre'
            },
            {
                name: 'Roxana',
                rol: 'madre'
            }
        ]
    },
    {
        name: 'Hugo',
        lastname: 'Bravo',
        email: 'hugacho@gmail.com',
        hobbies: ['basquet', 'natación'],
        family: [
            
            {
                name: 'Mario',
                rol: 'padre'
            },
            {
                name: 'Rosa',
                rol: 'madre'
            }
        ]
    },
];

// console.log(alumnos[0]);
// console.log(martin['lastname']);
// console.log(martin.contact.email);
// console.log(martin['contact']['email']);
// console.log(martin['contact'].email);
// console.log(martin.contact['email']);
// console.log(alumnos[1]);
alumnos.forEach(alumno => {
    // console.log(alumno);
});

var comments = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      "postId": 1,
      "id": 4,
      "name": "alias odio sit",
      "email": "Lew@alysha.tv",
      "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      "postId": 1,
      "id": 5,
      "name": "vero eaque aliquid doloribus et culpa",
      "email": "Hayden@althea.biz",
      "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
  ];

  comments.forEach(function(comment) {
      // console.log(comment);
  });

  var alumno = {
    name: "Fiorelola",
    "lastname": "De Felice",
    "age": 30,
    "hobbies": ["correr", "beber", "dormir"],
};

// Asignación
var name = 'Matías';
// Incremento
var count1 = 0;
count1 = count1 + 10;
// console.log(count1);
count1 = count1 + 10;
// console.log(count1);
count1++;
// console.log(count1);
// Decremento
var count2 = 200;
// console.log(count2--);
// console.log(count2);
// console.log(--count2);

// Lógicos
var myBoolean = 'Hugacho';
// console.log(!!!!myBoolean);

// AND
var v1 = false;
var v2 = false;
// console.log(v1 && v2);

// OR
var v3 = false;
var v4 = false;
// console.log(v3 || v4);

// Matemáticos
var numero1 = 10;
var numero2 = 20;
/*
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
*/

// Relacionales
var op1 = 400;
var op2 = 300;
// console.log(op1 >= op2); // ==, >, <, <=, >=, !=
var op3 = false;
var op4 = '';

// console.log(op3 === op4);

// ESTRUCTURAS DE CONTROL DE FLUJO
var name = '';
var resultName = 'Hola a los demás';
if (name === 'Melisa') {
  resultName = 'Hola Melisa';
} else if(name === 'Andrea') {
  resultName = 'Hola Andrea';
}

// console.log(resultName);

for(var i = 100; i > 0; i--) {
    // console.log(i);
}

for(var i = 0; i < alumnos.length; i++) {
    console.log('Familiares de ', alumnos[i].name);
    for(var j = 0; j < alumnos[i].family.length; j++) {
        console.log(alumnos[i].family[j].name);
    }
    console.log('_________________');
}

