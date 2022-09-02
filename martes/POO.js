
const persona = {

}
//
persona.nombre = "carlos";

//POO

//Encapsulamiento
class Alumno {

//    Constructor
    constructor(nombre,apellido,notas,carrera,carnet,edad) {
        console.log("Hola se ha creado un objeto Alumno");
        this._nombre = nombre;
        this._apellido = apellido;
        this._notas = notas;
        this._carrera = carrera;
        this._carnet = carnet;
        this._edad = edad;
    }

    //metodos get and set

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(value) {
        this._apellido = value;
    }

    get notas() {
        return this._notas;
    }

    set notas(value) {
        this._notas = value;
    }

    get carrera() {
        return this._carrera;
    }

    set carrera(value) {
        this._carrera = value;
    }

    get carnet() {
        return this._carnet;
    }

    set carnet(value) {
        this._carnet = value;
    }

    get edad() {
        return this._edad;
    }

    set edad(value) {
        this._edad = value;
    }

    promedio(){
        let p = 0;

        for (const i of this._notas){

            p += i;
        }
        return  p/this._notas.length
    }

}

//Creando el objeto
const alumnos = new Alumno("Carlos","Lobato",[7,9,10,10], "Ingenieria en sistemas","MF19026",22);

//Viendo el objeto



