function newFunction(name, age, country){
    var name = name || 'Diego';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);


// es6

function newFunction2(name = 'Diego', age = 23, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Sharon', 23, 'MX')


let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);