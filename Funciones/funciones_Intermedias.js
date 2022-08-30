// ─── Funcion Como Parametro De Otra Funcion ─────────────────────────────────────
//Creo la funcion que recibe otra funcion
function mensajeAleatorio(funcion,msjAleatorio,nombreAlum){

    return funcion(nombreAlum) + msjAleatorio;
}
//creo una funcion anonima externa
const despedida = function(alumno){
    return "Hasta luego " + alumno;
}

//Mando a llamar a la funcion principal
console.log(mensajeAleatorio(despedida," Lo esperamos pronto: ","Carlos"));



