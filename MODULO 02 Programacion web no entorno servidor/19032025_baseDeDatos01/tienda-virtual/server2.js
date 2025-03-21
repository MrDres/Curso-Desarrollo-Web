import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
const port = 5500;

// Middleware para parsear JSON
app.use(express.json());

// Habilitar CORS
app.use(cors());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Abrir la conexión a la base de datos SQLite
const dbPromise = open({
    filename: './database/database.db',
    driver: sqlite3.Database
});

// Inicializar la base de datos con una tabla de productos
async function initializeDatabase() {
    const db = await dbPromise;
    await db.exec(`
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            precio REAL NOT NULL,
            stock INTEGER,
            img TEXT,
            img2 TEXT
        )
    `);

    // Insertar datos iniciales si la tabla está vacía
    const productos = await db.all('SELECT * FROM productos');
    if (productos.length === 0) {
        await db.run(`INSERT INTO productos (nombre, precio, stock, img, img2) VALUES ('camiseta', 35, 150, "https://placehold.co/100x150?text=", "img/")`);
        await db.run(`INSERT INTO productos (nombre, precio, stock, img, img2) VALUES ('pantalon', 45.99, 45, "https://placehold.co/100x150?text=", "img/")`);
        await db.run(`INSERT INTO productos (nombre, precio, stock, img, img2) VALUES ('zapato', 105, 87, "https://placehold.co/100x150?text=","img/")`);
        await db.run(`INSERT INTO productos (nombre, precio, stock, img, img2) VALUES ('patata', 105, 50, "https://placehold.co/100x150?text=", "img/")`);
        await db.run(`INSERT INTO productos (nombre, precio, stock, img, img2) VALUES ('berenjena', 105, 8, "https://placehold.co/100x150?text=","img/")`);
    }
}

initializeDatabase();

// Ruta para obtener todos los productos
app.get('/productos', async (req, res) => {
    const db = await dbPromise;
    const productos = await db.all('SELECT * FROM productos');
    res.json(productos);
});

// Ruta para obtener un producto por ID
app.get('/productos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const db = await dbPromise;
    const producto = await db.get('SELECT * FROM productos WHERE id = ?', id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
});

// Ruta para finalizar la compra
app.post('/finalizar-compra', (req, res) => {
    const carrito = req.body;
    console.log('Carrito recibido:', carrito);

    // Simular procesamiento de la compra
    const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);

    res.json({ mensaje: `Compra finalizada. Total: ${total} €` });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
});