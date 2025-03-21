import express from 'express';
import cors from 'cors';

const app = express();
const port = 5501;

//middleware para parsear json
app.use(express.json());

//habilitamos CORS
app.use(cors());

//Base de datos de productos (simulada)
const productos = [
    { id:1, nombre: 'Camiseta', precio: 20},
    { id:2, nombre: 'Pantalon', precio: 30},
    { id:3, nombre: 'Bufanda', precio: 10},
    { id:4, nombre: 'Gayumbo', precio: 15},
    { id:5, nombre: 'Zapatos', precio: 28},
    { id:6, nombre: 'Chaqueta', precio: 100},
];

//ruta para obetener todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

//ruta para obtener los productos por el ID
app.get('/productos/:id', (req,res) =>{
    const id = parseInt(req.params.id);
    const producto = producto.find(p=> p.id === id);
    if (producto){
        res.json(producto);
    }
    else {
        res.status(404).json({mensaje: 'Producto no encontrado'});
    }
});

//ruta para finalizar la compra
app.post('/finalizar-compra', (req,res) => {
    const carrito = req.body;
    console.log('Carrito recibido:', carrito);
    //Simular el pago 
    const total = carrito.reduce((sum,producto) => sum+producto.precio,0);
    res.json({mensaje:`Compra finalizada . Total ${total} €`});
});

//iniciar el servidor
app.listen(port, ()=>{
    console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
});


