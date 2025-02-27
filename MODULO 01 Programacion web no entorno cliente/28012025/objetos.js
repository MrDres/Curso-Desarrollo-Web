//Objetos

const persona = {
    //clave - valor
    nombre: "Juan",
    edad: 25,
    esEstudiante: true
};
//acceder al objeto
console.log(persona.nombre);
console.log(persona['edad']);//Puesto que solicito un número
console.log(persona.edad);//Así no tiene que ser de la otra forma para que siempre lo reconozca como número
console.log(persona.esEstudiante);

//métodos del objeto -- puede contener funciones

const persona1 = {
    nombre: "Juan",
    saludar: function () {
        return `Hola, soy ${this.nombre}`
    }
};
console.log(persona1.saludar())

//this se refiere al mismo objeto, al propio objeto
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    obtenerInformacion: function () {
        return `Mi coche es de la marca: ${this.marca} y modelo: ${this.modelo}`;
    }
}
console.log(coche.obtenerInformacion());

//Creamos un objeto para representar un producto
//nombre, precio y cantidad
//Creamos una función para calcular el total del producto (precio*cantidad)

const producto = {
    nombre: "camisetas",
    precio: 20,
    cantidad: 30,
    pago: function () {
        return this.cantidad * this.precio;
    },
    otro: function () {
        return `${this.nombre}`;
    }

};
console.log("Mis", producto.otro(), "cuestan:", producto.pago());

//Manipular el objeto
//Agregar, modificar eliminar propiedades dentro del objeto

const persona2 = {
    nombre: "Juan"
}
persona2.edad = 25;
//añadimos
console.log(persona2);
//modificamos
persona2.nombre = "carlos";
console.log(persona2);
persona2.sexo = "Hombre";
console.log(persona2);
console.log("aqui,uno valores otro contenidos, otro todos");
console.log(Object.values(persona2));
console.log(persona2);
console.log(Object.keys(persona2));

//Un objeto -- estudiante, propiedad nombre, edad, asignaturas(2)
//método para mostrar detalles

const estudiante = {
    nombre: "Adrián",
    edad: 13,
    asignatura: ["matemáticas", "Historia"],
    mostrarDetalles: function () {
        return `${this.nombre}, ${this.edad} años, asignaturas: ${this.asignatura.join(` e `)}`;
    }
};
console.log("estudiante");
console.log(estudiante);
console.log(Object.keys(estudiante));
console.log(Object.values(estudiante));
console.log(estudiante.mostrarDetalles());

//Si yo quiero cambiar la clave (Key) dentro de un objeto

class miClase {
    constructor() {
        this.miObjeto = {
            clave1: "valor1",
            clave2: "valor2"
        };
    }
    cambiarValor(clave, nuevoValor) {
        if (this.miObjeto.hasOwnProperty(clave)) {
            this.miObjeto[clave] = nuevoValor;
            console.log(`El valor de ${clave} ha sido modificado a ${nuevoValor}`);

        }
        else {
            console.log(`La clave ${nuevoValor} no existe`);
        }

    }
}///Continuará...(28/01/2025)
