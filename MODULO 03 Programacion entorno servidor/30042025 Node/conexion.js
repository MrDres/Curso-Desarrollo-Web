const mysql = require('mysql2');

//Creamos la conexion con la DB
const conexion = mysql.createConnection({host:'localhost',user:'root',password:'',database:'ejemplo_db'})
//Conectar
conexion.connect((error)=>{
if (error) throw err;
console.log('Conectando a MySql/MariaDB');


//Ejemplo de conexión
conexion.query('SELECT * FROM usuarios',(err, resultados)=>{
    if (err) throw err;
    console.log(resultados);
});

});

//Cerrar conexión 
process.on ('SIGINT', ()=>{
    conexion.end();
    process.exit();
})
