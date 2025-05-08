//app.js
// console.log("Buenos dias people");

// function suma(a,b){
//     return a+b;
// }

// console.log(`La suma de 5 + 7 es ${suma(5,7)}`);

const express = require('express');
const app  = express();

app.get('/',(req,res)=>{
    res.send('Si todo va bien se muestra esto en el navegador!! Desde express')
});

app.listen(3001,()=>{
    console.log('Servidor corriendo en http://localhost:3001')
});