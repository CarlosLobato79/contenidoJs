//Herencia
class Persona {
    constructor(nombre,apellido,edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this. edad = edad
    }

    saludar(){
        return (`hey soy ${this.nombre} con ${this.edad} anios `);
    }
}

class Alumno extends Persona{
    constructor(nombre, apellido, edad, carnet) {
        super(nombre,apellido,edad);
        this.carnet = carnet;

    }

    saludar(){
        return super.saludar() + ` y mi  carnet es: ${this.carnet}`;
    }
}

const alumno1 = new Alumno("Carlos","Lobato",15,"LR19047");
console.log(alumno1.saludar())

const persona1 = new Persona("Carlos","Lobato",22)
console.log(persona1.saludar())

//:p