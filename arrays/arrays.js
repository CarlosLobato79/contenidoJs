

// que es un array?
// Es una coleccion de datos


// Creacion de arrays con object
const array = new Array("");
console.log(array)

// Creacion de arrays 2
const array2 = ["texto",10,["nombre","apellido",[20,30]]]
console.log(array2[2][2][0])

Array.isArray(array2)

let promedioEstudiante = (nombre,notas)=> {
        if(Array.isArray(notas)){
            console.log("es un array")
        }else {
            console.log("no es un array")
        }
}

promedioEstudiante("carlos",[]);

// Pop quita
const arraytest = [1,2,3,4]
console.log(arraytest.pop())
// Shift
const arraytest1 = [1,2,3,4]
// push
const arraytest2 = [1,2,3,4]
//at accede al ultimo elemento de un array
const num = [10,15,20,30,50,30]
console.log(num.at(-1))
console.log("----------------------------------")
const arrayPrueba =  [10,15,20,30,50,30]
// keys()
for(const x of arrayPrueba.keys()){
    console.log(x)
}
// values
for(const x of arrayPrueba.values()){
    console.log(x)
}
// entries - saca lo que es la key y el value
for(const [key,value] of arrayPrueba.entries()){
    console.log("Llave: " + key + "\t valor: "+ value)
}

//ARRAYS AGREGAR O BORRAR ELEMENTO
// Agregar elementos
const numero = [];
numero[0] = "carlos 0"
numero[1] = "carlos 1"
numero[2] = "Carlos 2"
console.log(numero)

// borrar elemento de un array - delete
const nuevo23 = [10,15,16,18,19]
delete nuevo23[1]
console.log(nuevo23)
// map se recorre a si mismo ejecutado codigo y devuelve un objeto nuevo
const numbers = [-1, -2, 3, -4, 5];
const valorAbsoluto = numbers.map(x => Math.abs(x))

// arrays de objetos literales
const almuerzos = [
	{ principal: "arepa", postre: "helado"},
	{ principal: "tacos", postre: "torta de queso" },
	{ principal: "pizza", postre: "galletas" },
	{ principal: "sushi", postre: "quesillo" }
]
const principales = almuerzos.map(values => values.postre)
console.log(principales)

// Marcela por favor de esta lista que voy que te voy a dar de alumnos
// solo sacame los que mayores de edad
// filter
const edades = [15,20,15,30,90,80,10]
const mayoresEdad = edades.filter(x => x >= 18)
const menoresEdad = edades.filter(x => x < 18)
console.log(mayoresEdad)
console.log(menoresEdad)
















