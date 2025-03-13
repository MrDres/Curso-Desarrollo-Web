// Crear un programa para una tienda virtual usando clases
const gridContainer= document.getElementById("productos_container");

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
let productos=[ordenador1, ordenador2, libro1,libro2,accesorio1,accesorio2];

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


function mostrarProducto(productos){
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    let aGrid=document.createElement("a");
    aGrid.href="https://www.ejemplo.com";

    let imagen = document.createElement("img");
    imagen.src="https://placehold.co/150";
    imagen.alt="imagen de ejemplo";

    let listaDatosProd= document.createElement("ul");
    listaDatosProd.setAttribute("id","lista_datos_productos");
    
    for(i=0; i < Object.keys(productos).length; i++){
        let fila = document.createElement("li");
        fila.textContent=`Nombres: ${productos.nombre}`;                
        listaDatosProd.appendChild(fila);
    }
   

    let boton=document.createElement("button");
    boton.classList.add("boton");
    boton.textContent="Ver mas";

    let divEstrellas= document.createElement("div");
    divEstrellas.classList.add("rating"); 

    for(i=0;i<5;i++){
    let spanEstrellas=document.createElement("span");
    spanEstrellas.classList.add("star");
    spanEstrellas.setAttribute("data-value",i+1);
    spanEstrellas.innerHTML="&#9733;"
    divEstrellas.appendChild(spanEstrellas)
    }

    aGrid.appendChild(imagen);
    aGrid.appendChild(listaDatosProd);    
    gridItem.appendChild(aGrid);
    gridItem.appendChild(boton);
    gridItem.appendChild(divEstrellas);
    gridContainer.appendChild(gridItem);


}

mostrarProducto(libro1);
