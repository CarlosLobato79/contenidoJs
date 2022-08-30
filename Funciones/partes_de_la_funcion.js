
//Accediendo a los nombres de los argumentos de la funcion se ocupa "arguments"
function test(argumento, objeto, variable){
    console.log(test.arguments)
    console.log(test.arguments[0])
}
test("argumento1","objeto1","variable");

//Accediendo al lenght de la cant de argumentos de la funcion
function unArgumento(argumento1){}
console.log(unArgumento.length)

function dosArgumentos(argumento1,argumento2){}
console.log(dosArgumentos.length)

function tresArgumentos(argumento1,argumento2,argumento3){}
console.log(tresArgumentos.length)

//Lenght cuando usamos Spread
console.log((function(...argumentos){}).length)

//El lenght de un funcion con valore por defecto sera contado osea devolvera 1
console.log((function(num1, num2 = 10,num3 = 2){}).length)