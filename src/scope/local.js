// El console log de afuera no puede acceder a la variable const ya que se 
// encuentra de manera local en una funcion y no de manera global
// para poder acceder a ella
const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
 };
 
 helloWorld();
 console.log(hello);
 
 // NO se llama la variable global
 // ya que dentro de la funcion estamos creando otra variable
 // Y dentro de la funcion interna estamos llamando la variable local
 var scope = 'Im global';
 
 const functionScope = () => {
     var scope = "Im just a local";
 
     // Arrow function
     const func = () => {
         return scope
     }
     console.log(func());
 
 }
 functionScope();