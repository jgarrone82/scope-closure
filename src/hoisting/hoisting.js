// var a;
a = 2;
var a; // el hoisting eleva nuetras declaraciones como 
       // si hubieramos establecido var al inicio
       // esto sucede cuando js se compila
console.log(a);// 2

// Aqui da error porque estamos accediendo al valor sin que esta establecido
console.log(a); //undefined
var a = 2;

// Teniendo en cuenta nuestro dos ejemplos javascript utiliza el hoisting
// Dentro de nuestras declaraciones  y no en las inicializaciones

//Ejemplo 3 
//aunque invoquemos nuestra funcion antes de declararla funcionara
//ya que js lo que primero compila son nuestras funciones y variables
nameOfDog('elmo');
function nameOfDog(name){

    console.log(name)
}