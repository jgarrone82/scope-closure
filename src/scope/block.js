const fruits = () => {

    // Var es un ambito de funcion
    // let y const SOLAMENTE pueden accederse a ellos dentro del bloque IF
    if(true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';

        console.log(fruits2);
        console.log(fruits3);
    }

    console.log(fruits1);
}
fruits();

// Con LET Nns mustra primero el valor del bloque
// Con VAR reasigna ambos valores
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

// si usamos VAR este nos reasigna el y queda en 10
// si usamos LET declara un valor unico y de manera correcta
const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        //setTimeout(() => {
           console.log(i); 
        //}, 1000);
    }
}
anotherFunction()