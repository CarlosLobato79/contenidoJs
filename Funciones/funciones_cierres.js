// ─── Cierres ────────────────────────────────────────────────────────────────────

/*Los cierres son una de las características más poderosas de JavaScript. JavaScript permite el anidamiento de funciones y otorga a la función interna acceso completo a todas las variables y funciones definidas dentro de la función externa (y todas las demás variables y funciones a las que la función externa tiene acceso).*/
var pet = function(name) {   // La función externa define una variable llamada "name"
    var getName = function() {
      return name;             // La función interna tiene acceso a la variable
                               // "name" de la función externa
    }
    return getName;            // Devuelve la función interna, exponiéndola así a ámbitos externos
  }
  myPet = pet('Vivie');

  myPet();                     // Devuelve "Vivie"

