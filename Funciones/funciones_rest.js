// ─── Definir Argumentos Con Parametros Rest ─────────────────────────────────────
//... los tres puntos hace referencia a que vendran 1 o mas argumentos
var suma = function(...x){
    let valor = 0;
        if(arguments.length > 0){
            for(let i = 0;i < arguments.length;i++){
                valor += arguments[i];
            }
        }else{
            valor = "No hay datos"
        }
    return valor;
}

console.log(suma(1,2,3,4,5,6,7,8,9,10))