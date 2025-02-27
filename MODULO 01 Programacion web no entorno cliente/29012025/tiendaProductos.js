/* Simularemos la gestión de un inventario, incluyendo calcular el valor total de los productos y filtrar productos en oferta.

const productos = [
  { id: 1, nombre: "Camiseta", precio: 20, stock: 50, oferta: false },
  { id: 2, nombre: "Pantalón", precio: 40, stock: 30, oferta: true },
  { id: 3, nombre: "Zapatillas", precio: 60, stock: 20, oferta: true },
  { id: 4, nombre: "Gorra", precio: 15, stock: 100, oferta: false }
]; */



const productos = [
    { id: 1, nombre: "Camiseta", precio: 20, stock: 50, oferta: false },
    { id: 2, nombre: "Pantalón", precio: 40, stock: 30, oferta: true },
    { id: 3, nombre: "Zapatillas", precio: 60, stock: 20, oferta: true },
    { id: 4, nombre: "Gorra", precio: 15, stock: 100, oferta: false },
    { id: 5, nombre: "Gayumbos", precio: 10, stock: 100, oferta: true}
  ];
// 1. Calcular el valor total de los productos en inventario
// Recorrer cada elemento del array determinar el inventario por producto(producto.precio+producto.cantidad) y acumularlo en una variable utilizando .reduce.

const valorTotal = productos.reduce((acumulado, producto) => acumulado + producto.precio * producto.stock,0);
console.log("Valor total de los productos en inventario: ", valorTotal);

// 2. Filtrar los productos en oferta
//Recorrer cada elemento del array y filtrar los productos que tengan la propiedad oferta en true utilizando .filter.

const productosOferta = productos.filter(producto => producto.oferta===true);
console.log("Productos en oferta: ", productosOferta);