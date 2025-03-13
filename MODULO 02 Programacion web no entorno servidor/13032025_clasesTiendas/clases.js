// Crear un programa para una tienda virtual usando clases

class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
    informacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Cantidad en Stock: ${this.cantidadEnStock}`);
    }
}

class Ordenadores extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca, modelo) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
        this.modelo = modelo;
        
    }
    informacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Cantidad en Stock: ${this.cantidadEnStock}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
}

class Libros extends Producto {
    constructor(nombre, precio, cantidadEnStock, autor, editorial) {
        super(nombre, precio, cantidadEnStock);
        this.autor = autor;
        this.editorial = editorial;
    }
    informacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Cantidad en Stock: ${this.cantidadEnStock}`);        
        console.log(`Autor: ${this.autor}`);
        console.log(`Editorial: ${this.editorial}`);
    }
}

class Accesorios extends Producto{
    constructor(nombre,precio,cantidadEnStock,tipo){
        super(nombre,precio,cantidadEnStock);
        this.tipo=tipo;
    }
    informacion(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Cantidad en Stock: ${this.cantidadEnStock}`);       
        console.log(`Tipo: ${this.tipo}`)
    }
}

let ordenador1 = new Ordenadores("Macbook", 1200, 25, "Asus", "Rogue 27X");
let ordenador2= new Ordenadores("Pc",800,50,"Msi","Stealth");
let libro1 = new Libros("El cuervo", 25,100, "Edgar Allan Poe", "Planeta");
let libro2 = new Libros("El Gato", 25,11, "Manolo Cifu", "Planeta");
let accesorio1 = new Accesorios("Pulsera", 12, 300,"pulsera");
let accesorio2 = new Accesorios("Collar", 12, 300,"pulsera");


console.log("Ordenador1");
ordenador1.informacion();
console.log("Ordenador2");
ordenador2.informacion();
console.log("Libro1");
libro1.informacion();
console.log("Libro2");
libro2.informacion();
console.log("Accesorio1");
accesorio1.informacion();
console.log("Accesorio2");
accesorio2.informacion();

function mostrarProducto(producto){
    const resultado=`${producto.nombre} tiene un precio de ${producto.precio} y un stock de ${producto.cantidadEnStock}`;
    console.log(resultado);
    document.getElementById("producto").innerHTML = resultado;
}

mostrarProducto(ordenador1);
mostrarProducto(ordenador2);
mostrarProducto(libro1);
mostrarProducto(libro2);
mostrarProducto(accesorio1);
mostrarProducto(accesorio2);

