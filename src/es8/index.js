const data = {
    frontend: 'Diego',
    backend: 'Sharon',
    design: 'John',
}

const entries = Object.entries(data);
console.log(entries);
console.log(data);
console.log(entries.length);

////

const data = {
    frontend: 'Diego',
    backend: 'Sharon',
    design: 'John',
}

const keys = Object.keys(data);
const values = Object.values(data);
console.log(keys);
console.log(values);

////

const cadena = 'hello';
console.log(cadena.padStart(7, 'hi'));
console.log(cadena.padEnd(12, '-------'))

////

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error)
    }
}

anotherFunction();