/*Crea un programa en JavaScript que administre una lista de productos en una tienda. El programa debe:Contener un array con objetos de productos. Cada producto debe tener las propiedades:
nombre (string)
precio (número)
stock (número)
Implementar las siguientes funciones:
agregarProducto(nombre, precio, stock): Agrega un nuevo producto al array. 
eliminarProducto(nombre): Elimina un producto por su nombre.
actualizarStock(nombre, cantidad): Modifica el stock de un producto.
obtenerProductosDisponibles(): Devuelve un array con los productos que tienen stock disponible (> 0).
calcularValorInventario(): Devuelve el valor total del inventario (precio * stock de cada producto).
Datos
    { nombre: "Laptop", precio: 800, stock: 5 },
    { nombre: "Mouse", precio: 20, stock: 10 },
    { nombre: "Teclado", precio: 50, stock: 7 },*/

    const productosInicial=[
        { nombre: 'Laptop', precio: 800, stock: 5 },
        { nombre: 'Mouse', precio: 20, stock: 10 },
        { nombre: 'Teclado', precio: 50, stock: 7 }];

    

   cargarProductosInicio = () => {
        productos.forEach(producto => {
            const newTask = document.createElement("li");
            newTask.classList.add("producto");
            newTask.dataset.id = Date.now();
            newTask.innerHTML = `${producto} <button class="deleteBtn" data-action="delete">Eliminar</button>`;
            studentList.appendChild(newTask);
        });
    }
    cargarProductosInicio();

//function agregarProducto()
    