// Esto arrojara un error ya que "fruit" no esta definido de manera global
const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}
fruits();
console.log(fruit);

const anotherFunction = () => {
    // Esto es un scope local
    // con var PODEMOS reasignar el valor de la variable pero puede darnos problemas a futuro
    // con let y const NO podemos reasignarlas
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2;
    console.log(x);
    console.log(y);
}
anotherFunction();