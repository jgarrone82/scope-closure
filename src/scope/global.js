// Variables global
var hello        = 'Hello'; // --> SOLO var puede ser reasignada
let world        = 'Hello World'; // --> NO podemos asignar un valor a lo que hemos establecido
const helloWorld = 'Hello World!'; // --> NO podemos asignar un valor a lo que hemos establecido


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

// Esto seria una mala practica ya que estamos declarando una variable global
// dentro de una funcion y la estamos llamando fuera de su scope
const helloWorld = () => {
    globalVar = 'im global'
}
helloWorld();
console.log(globalVar);

// Esta otra practica tampoco es bueno hacerlo
const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}
anotherFunction();
console.log(globalVar);