//Funcion clasica
function saludo(){
    return "Mensaje retornado de funcion basica";
}
console.log(saludo())

//Funcion con parametros
function saludaAlumno(alumnoNombre){
    return "Hola estudiante " + alumnoNombre;
}
console.log(saludaAlumno("Carlos"))

// ─── Funcion Con Valores Default ────────────────────────────────────────────────


//Esta funcion si no encuentra un valor lo asignara por defecto
function nombre(nombre="Sin Asignar"){
    if(nombre !== "Sin Asignar"){
        return "Estado: Asignado \nNombre Asignado: " + nombre;
    }
    return "Estado: " + nombre;
}
//Sin pasarle parametros para que tome el valor por default
console.log(nombre());
//Con parametros
console.log(nombre("Carlos"));

// ─── Funcion Anonima ────────────────────────────────────────────────────────────

/*Una funcion anonima puede o no tener un nombre y ser almacenada en un variable
Funcion anonima sin nombre*/
const cuadrado = function(x) {
    return x*x;
}
console.log("Funcion anonima cuadrado: " + cuadrado(10))
//Funcion anonima con nombre
//Proporcionar un nombre permite que la función se refiera a sí misma
const factorial = function fac(x){
    return x < 2 ? 1 : x * fac(x - 1)
}
console.log("Funcion anonima Factorial: " + factorial(5))


