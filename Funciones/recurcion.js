// Una función se puede referir y llamarse a sí misma
// Hay tres formas de que una función se refiera a sí misma
/*
    El nombre de la función
    arguments.callee
    Una variable dentro del ámbito que se refiere a la función
*/
// ─── Nombre De La Funcion ───────────────────────────────────────────────────────
let valorFibo = function fibonacci(num){
   if (num < 2){
    return num;
   }else{
    return fibonacci(num-1)+fibonacci(num-2);
   }
}
console.log(valorFibo(7));

 // ─── Usando Arguments Callee ────────────────────────────────────────────────────
const numero = function(num){
   return num <= 0 ? "El numero ya se igualo a 0":arguments.callee(num-1);
}


console.log(numero(10));



