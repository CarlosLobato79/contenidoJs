
// ─── The If Statement ───────────────────────────────────────────────────────────
let a = 5;
let b = 7;
if(a > b){
    console.log("a es mayor que B");
}else{
    console.log("b es mayor que A")
}

// ─── Ternario ───────────────────────────────────────────────────────────────────

let variable1 = (a > b)? "A es mayor que B": "B es mayor que a";
console.log(variable1)
// ─── Ciclos ─────────────────────────────────────────────────────────────────────

// ─── Do While ───────────────────────────────────────────────────────────────────
// Ejecuta el codigo primero y luego verifica hasta que la condicion sea verdadera
let contador = 0;
do {
    contador++;
    console.log(`contador incrementandose : cantidad : ${contador}`)
}while(contador < 5);

// ─── While ──────────────────────────────────────────────────────────────────────
// analiza una expresion y hace el ciclo mientras la expresion sera verdadera
let abierto = false;
let relot = 1;

while(abierto === false){
    relot++;
    if (relot <= 3){
        console.log("Aun cerrado")
    }else{
        abierto = true;
    }
}

// ─── For Statement ──────────────────────────────────────────────────────────────
// Es un bucle iterativo con cierta reglas termina hasta que la condicion se cumpla
/* 1.variable iterativa
   2.condicion
   3.valor de iteracion
*/

for(let i = 0; i < 2;i++){
    console.log("Ejecutando for normal");
}

// ─── Infinito Loop Con For ──────────────────────────────────────────────────────
// Es una forma de hacer un bucle infinito omition los 3 valores principales
// for(;;){
//     console.log("Infinito loop con for")
// }


// ─── For In ─────────────────────────────────────────────────────────────────────
//Esta forma del for es usada para enumerar las llaves de un objeto
//Ejecuta un bloque de código para cada elemento
//Las propiedades estan desordenadas a si que el retorno del for in puede no ser predictivo
const objeto = {
    nombre : "carlos",
    apellido : "romero",
    carrera: "Sistemas",
    notas : [20,30,40,50]
}
//Nos mostrara las llaves de un objeto
for(const valor in objeto){
    console.log(valor)
}

// ─── For Of ─────────────────────────────────────────────────────────────────────
//Esta forma del for es usada para recorrer los iterables de un objeto
//Ejecuta un bloque de código para cada elemento
const edades = [20,30,15,19,20,21];

for (const i of edades){
    console.log(i)
}

// ─── The With Statement ─────────────────────────────────────────────────────────
//El with actua como herencia del scope de un objeto
//No es buena practica para usarla en Produccion
const Zombie = {
    nombre : "Carlos",
    tipo : "Boss",
    vida: 100,
    hambre : 10
}
console.log(Zombie)
//Para un caso normal de cambio de valores tendriamos que hacer
Zombie.nombre = "Romero"
Zombie.vida = 50;
console.log(Zombie)

//El codigo repetitivo aqui es mandar a llamar al objeto esto se soluciona con with
//Toma como herencia las propiedades del objeto
with(Zombie){
    nombre = "The killer"
    vida = 75
}
console.log(Zombie)


// ─── The Switch Statement ───────────────────────────────────────────────────────
//Accede al valor de una variable y compara segun casos
//cada caso se tiene que romper con break
let nombreAlumno = "Carlos";
 switch(nombreAlumno){
    case "Carlos":
        console.log("Su nombre es correcto");
        break;
    case "Lobato":
        console.log("El nombre no es correcto");
        break;
    default:
        console.log("Es el caso por defecto por si ningun caso coinside");
 }















