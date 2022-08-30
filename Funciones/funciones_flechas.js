// ─── Funciones Flecha ───────────────────────────────────────────────────────────

/*Una expresión de función flecha (anteriormente, y ahora conocida incorrectamente como función de flecha gruesa) tiene una sintaxis más corta en comparación con las expresiones de función y no tiene su propio this, arguments, super o new.target*/

// ─── Las Funciones Flecha Siempre Son Anonimas ──────────────────────────────────
//Las funciones flechas son la forma corta de una el objeto function
//no necesita nombre y puede usar o no el return

//creo un array
const arrayNombres = [
    'Carlos',
    'Luis',
    'Lobato',
    'Romero'
]

// ─── Puede Ser Declara Sin Argumentos ───────────────────────────────────────────
const bienvenida = () => console.log("Bienvenida")
bienvenida()

// ─── Puede Ser Declara con argumentos ─────────────────────────────────────────
const suma = (x,y) => x+y;
console.log(suma(1,2))

// ─── Puede Ser Declarada Con Parametros Rest ────────────────────────────────────
const recorrer = (...x) => {
    x.forEach(data => console.log(data))
}
recorrer(arrayNombres)

// ─── Se Pueden Crear Adentro De Cualquier Ambito ────────────────────────────────
let lengthPalabras = arrayNombres.map(x => x.length)
console.log(lengthPalabras)

// ─── Retornando Objetos Literales ───────────────────────────────────────────────
// es necesario retornarlos entre () o {}
const lista = () => ({carlos : "lobato"})
console.log(lista())

const lista2 = () => {return {apellido : "lobato"}}
console.log(lista2())
