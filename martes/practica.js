//PROPIEDADES

/* CAFE, LECHE, AZUCAR, CALIENTE*/
//METODOS

// Rellenar, ES VACIO, ES LLENA

//Ejemplo de una tasa

const tasa ={
    //Propiedades
    vacio: false,
    cantidadMax: 100,
    cantidadMin: 0,
    caliente: false,
    //  Metodos
    EsVacio: function (){
        return vacio;
    }

}

//this hace referencia al objeto en el que estamos
const carro = {
    gas: 100,
    encendido: true,
    movimiento: 0,

    avanzar: () =>{
        if(this.encendido){
            this.movimiento = 1;
        }
    },

    retroceder: () => {
        if(this.encendido){
            this.movimiento = -1;
        }
    },

    frenar: () =>{
        if(this.encendido){
            this.movimiento = 0;
        }
    },

    apagar: ()=>{
        if(this.encendido){
            this.encendido = false;
        }
    }
}

// Propiedades
// Edad, nombre, carrera, apellido, color
//Metodos
// Caminar, Comer, Hablar, Correr, Sentarse, Poner de pie

//Esto es un objeto literal
const persona={
    //propiedades
    edad: 56,
    Nombre: "Carlos",
    Apellido: "Stanley",
    Carrera: "Ingenieria en sistemas",
    Color: "rojo"
}

const albumMusica = {
    nombreAlbum: "I Am",
    anioCreacion: 2016,
    cantCanciones: 12,
    generoCanciones: ["Rock and Roll", "Gospel", "Jazz", "Kpop"],
    aniosDesdeSalioElAlbum: ()=>{
        return 2022 - this.anioCreacion;
    }
}

albumMusica.nombreAlbum = "thats the spirit"
albumMusica.nombreBanda = "BTS"


document.write(`<h1>Album: ${albumMusica.nombreAlbum} tiempo desde que salio</h1>`);

//Comillas dobles
// ""
//Comillas simples
//' '
// backticks
// ` `











