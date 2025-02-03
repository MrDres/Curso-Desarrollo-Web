/* 
FILTRAR PRODUCTOS POR PRECIO

Crear una funcion filtrarProductos que reciba un array de objetos producto (con 'nombre' y 'precio') y un precio maximo, devolviendo un nuevo array solo con los productos cuyo precio sea menos o igual al maximo.
Ejemplo entrada:
[
{nombre: 'Camisa', precio: 25},
{nombre: 'Pantalon', precio: 40},
{nombre: 'Zapatos', precio: 35}
]
*/

function filtrarProductos(productos, precioMaximo){
    return productos.filter((producto)=>producto.precio<=precioMaximo);
}

const productos=[
    {nombre: 'Camisa', precio: 25},
    {nombre: 'Pantalon', precio: 40},
    {nombre: 'Zapatos', precio: 35}];

const precioMaximo=35;

console.log("Productos filtrados: ", filtrarProductos(productos,precioMaximo));
document.getElementById('ejercicio03').innerText=`Productos filtrados: ${JSON.stringify(filtrarProductos(productos,precioMaximo))}`;