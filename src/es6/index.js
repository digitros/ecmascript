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
console.log(name, age, country)

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