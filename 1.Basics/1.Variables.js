// ─── Declaracion De Variable ────────────────────────────────────────────────────
/* var y let tienen diferencias y estas es que una puede ser de ambito global y otra no
    ambas variables pueden ser redeclaradas
*/
// ─── Var ────────────────────────────────────────────────────────────────────────
// Es de ambito global

{
    var variable = "Variable";
}

//var esta se accede facil mente por que es de ambito global
console.log(variable)
//redeclaracion

var variable = 20;
console.log(variable)

// ─── Let ────────────────────────────────────────────────────────────────────────
// No es de ambito global

{
    let variable2 = "variable2";
    console.log(variable2);
}
//redeclaracion
let variable2 = "30"
console.log(variable2)

//Tratar de acceder a la variable2 sera imposible por que se no entra al ambito global
// console.log(variable2)

// ─── Const ──────────────────────────────────────────────────────────────────────
// Esta variable es similar a let pero con la diferencia que tiene que ser declarada y no
// puede ser redefinida  ni redeclarada
const VARIABLE3 = "variable3"
console.log(variable3)

{
    const variable3 = "variable5"
    console.log(variable3)
}


