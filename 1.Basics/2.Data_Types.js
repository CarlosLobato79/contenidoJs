// ─── Existen Diferentes Tipos De Datos En Javascript ────────────────────────────

    // Para Conocer Que Tipo De Almacena Una Variable Podemos Usar El Typeof

// ─── Typeof ─────────────────────────────────────────────────────────────────────
// variable declarada sin definir
console.log("-----------Typeof------------")
let variable1;
console.log(typeof(variable1))
// variable que puede contener true o false
let variable2 = true;
console.log(typeof(variable2))
// variable que puede contener cadenas de texto
let variable3 = "cadena";
console.log(typeof(variable3))
// variable que puede contener numeros enteros o decimales
let variable4 = 10;
console.log(typeof(variable4))
// variable que puede contener objeto
let variable5 = {};
console.log(typeof(variable5))
// variable que puede contener un simbolo
let variable6 = Symbol("cadena");
console.log(typeof(variable6))

// ─── The Null Type ──────────────────────────────────────────────────────────────
/* se recomienda declarar una variable a null si esa variable es candidato a convertirne a un objeto
 variables que no son objetos obtendran el valor undefined y a si los objetos tendran valor de null
 no hace falta asignar undefined a la nuestra variable ya que esta es proporcinada por el lenguaje*/

// Esta variable hace referencia aun objeto
let variableTest = null;
console.log("-----------The Null Type------------")
console.log(typeof(variableTest))


// Undefined muestra la ausencia de valor
// null muestra la ausencia de referencia

// ─── Number Conversions ─────────────────────────────────────────────────────────
/*Hay varias formas de convertir un no numericos a un numericos */

// Casting functions
console.log("------------Casting functions-----------")
// parseInt
// parseFloat
// String a numero: devuelve 10
console.log(typeof(parseInt("10")))
// true/false a numero: devuelve 1 o 0
console.log(typeof(parseInt(true)))
console.log("------------Function Number-----------")
//Funcion Number si le pasamos un undefined nos retorna un NaN
console.log(Number(undefined))
// si le pasamos un null nos devuelve 0
console.log(Number(null))
// si le pasamos true o false nos devuele 0 o 1
console.log(Number(true))

console.log("------------Function Number Rules with Strings-----------")
//La funcion Number sigue estas reglas con los strings
//Solo con caracteres numericos devuelve el valor
console.log(Number("123"))
//Si hay ceros al principio los ignora
console.log(Number("012"))
//Si contiene punto flotante lo convierte a su respectivo floating-point y ceros al principio son ignorados
console.log(Number("1.2"))
//Si el valor es un hexadecimal valido lo convierte a entero
console.log(Number("0xf"))
//Si la cadena esta vacia devuelve 0
console.log(Number(""))
//Si la cadena no contiene ninguno de este formato devuelve NaN
//(Todo lo que no se pueda convertir a numero devuelve NaN)
console.log(Number("asdasd"))

// ─── Parseint Examples ──────────────────────────────────────────────────────────
let num1 = parseInt("123red") //1234
let num2 = parseInt("") //NaN
let num3 = parseInt("0xA") // 10 - decimal
let num4 = parseInt("2.5") // 22
let num5 = parseInt("70") // 70 - decimal
let num6 = parseInt("0xf") // 15 - hexadecimal

// ─── The Symbol Type ────────────────────────────────────────────────────────────
/* Symbols are instantiated using the Symbol function. Because it is its own primitive type, the typeof
operator will identify a symbol as symbol .*/
let symbolVariable = Symbol("test")
let newSymbol = Symbol("test1")

// ─── The Object Type ────────────────────────────────────────────────────────────

/*Objects are created
by using the new operator followed by the name of the object type to create.*/

let Persona = new Object();






