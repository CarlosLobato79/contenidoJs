// ─── Primitive And Reference Values ─────────────────────────────────────────────

// Primitivos
    //Primitive values are simple atomic pieces of data
    //Son todos los variables que contienen un dato
// Referencia
    //reference values are objects that may be made up of multiple values
    //Son de tipo objeto que pueden contener multiples datos

// ─── Dynamic Properties ─────────────────────────────────────────────────────────
/*When you
work with reference values, you can add, change, or delete properties and methods at any time. Con-
sider this example*/
//creo un objeto
console.log("-----------------Dynamic Properties-----------------")
let Persona = new Object();
//Le asigno la propiedad name con el valor de persona
Persona.name = "Carlos";
console.log(Persona.name)

//(Esto no se puede hacer con valores primitivos)
let Alumno = "Carlos";
Alumno.edad = 20;
console.log(
    "-----------------Primitivos no tienen Dynamic Properties-----------------"
)
console.log(Alumno.edad)
console.log("-----------------Objeto with the word \"new\"----------------- ")
//Si usamos la keyword para crear nuestro dato primitivo js creara un objeto
let nombre = new String("Carlos")
console.log(typeof nombre)
nombre.edad = 10;
console.log(nombre.edad)


const edades = new Object()
edades.name = "carlos"
let edad = edades

console.log(edad)
console.log(edades)

// ─── Determining Type ───────────────────────────────────────────────────────────
 /* para determinar que tipo de dato es se ocupa typeof pero este solo devuelve el tipo de dato
 object pero no diferencia entre tipos de datos objects para eso fue creado
 instanceof lo cual fue creado para saber que tipo de object es*/
console.log(
    "-----------------Determining Type-----------------"
)
console.log(edades instanceof Object)
console.log(edades instanceof Array)
console.log(edades instanceof RegExp)


