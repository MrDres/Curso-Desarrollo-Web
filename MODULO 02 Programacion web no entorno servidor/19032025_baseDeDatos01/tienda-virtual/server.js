import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

const app = express();
const port = 5501;

//Middleware para parsear JSON

app.use(express.json());

//Habilitar Cors
app.use(cors());

//Distribuir los archivos desde la carpeta "public"

app.use(express.static('public'));

//abrir conexion a la base de datos SQLite

const dbPromese = open({
    filename: './database/database.db',
    driver: sqlite3.Database
});

//Inicializar la base de datos
async function initializeDatabase() {
    const db = await dbPromese;

    //Crea la base de datos en caso de no existir, en este caso la tabla de productos
    await db.exec(`CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        precio REAL NOT NULL,
        stock INTEGER
        )        
        `);

        //Insertar los datos inciales si la tabla esta vacia
        const productos = await db.all('SELECT * FROM productos');
        if(productos.length === 0){
            await db.run(`INSERT INTO productos (nombre, precio, stock) VALUES ('camiseta', 35, 150)`);
            await db.run(`INSERT INTO productos (nombre, precio, stock) VALUES ('pantalon', 45.99, 45)`);
            await db.run(`INSERT INTO productos (nombre, precio, stock) VALUES ('zapato', 105, 87)`);
            await db.run(`INSERT INTO productos (nombre, precio, stock) VALUES ('patata', 105, 50)`);
            await db.run(`INSERT INTO productos (nombre, precio, stock) VALUES ('berenjena', 105, 8)`);
            console.log('Productos iniciales añadidos a la DB correctamente');
        }
        //LLamar a la funcion de inicializacion
        initializeDatabase();

        //ruta de los productos
        app.get('/productos', async (req, res)=>{
            const db = await dbPromese;
            const productos = await db.all('SELECT * FROM productos');
            res.json(productos);
        })

        //ruta para obtener un producto por ID

        app.get('/productos', async (req,res)=> {
            const id = parseInt(req.params.id);
            const db = await dbPromese;
            const producto = await db.get('SELECT * FROM productos WHERE id=?', id);
            if (producto){
                res.json(producto);
            }
            else{
                res.status(404).json({mensaje: 'Producto no encontrado'});
            }
        });
        //Ruta para finalizar la compra
        app.post('/finalizar-compra', (req,res)=>{
            const carrito= req.body;
            console.log('Carrito Recibido:', carrito);
        })

        //Simular el proceso de la compra
        const total = carrito.reduce((sum, producto)=> sum+producto.precio,0);
        res.json({mensaje: `Compra finalizada. Total: ${total} €`});

        //inicializamos el servidor 
        app.listen(port, ()=>{
            console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
        });
}