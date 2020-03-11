////

function newFunction(name, age, country){
    var name = name || 'Diego';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

function newFunction2(name = 'Diego', age = 23, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Sharon', 23, 'MX')

////

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);


let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);

////

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit \n"
+ "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

console.log(lorem);
console.log(lorem2);

////

let person = {
    'name': 'Diego',
    'age': 23,
    'country': 'MX'
}

console.log(person.name, person.age);

let{ name, age, country } = person;
console.log(name, age, country);

////

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['Diego', ...team1, ...team2];

console.log(education);

////

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

////

const a = 'b';
console.log(a);

////

let name = 'Diego';
let age = 23;

obj = { name: name, age: age};

obj2 = { name, age };

console.log(obj);
console.log(obj2);

////

const names = [
    {name: 'Diego', age: 23},
    {name: 'Sharon', age: 23}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) =>{
    //...
}

const listOfNames4 = name =>{
    //...
}

const square = num => num * num;

console.log(square(5));

////

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Todo ok');
        } else {
            reject('Salio mal');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


////


class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

////

const hello = require('./module');

console.log(hello());

////

function* helloWorld(){
    if (true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

////

function* fibonacci(){
    let fn1 = 1;
    let fn2 = 1;
    while(true){
        let actual = fn2;
        fn2 = fn1;
        fn1 = fn1 + actual;
        let reset = yield actual;
        if(reset){
            fn1 = 1;
            fn2 = 2;
        }
    }
}

let secuencia = fibonacci();
for (i = 1; i <= 9; i++){
    console.log(secuencia.next().value)
}