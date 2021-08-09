function person() {
    var saveName = 'Name';  // Inicializa la variable con un valor por defecto
    return { // Closure de métodos (objeto con sus atributos)
      getName: () => {  // Atributo que retornará el nombre
        return saveName;
      },
      setName: (name) => {  // Atributo que contendrá el nombre
        saveName = name;
      }
    };
  };
  
  var newPerson = person()  // Almanena el contenido de la función person, es decir, la inicialización de la variable por defecto y el objeto para manejar los métodos.
  
  console.log(newPerson.getName());  // Al ser el método un atributo de un objeto se maneja como tal.
  newPerson.setName('Jorge');
  console.log(newPerson.getName());