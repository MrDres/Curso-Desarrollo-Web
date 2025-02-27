/*
CONVERTIR ARRAY A OBJETO INDEXADO

Crear una funcion indexarPorId que reciba un array de objetos con 'id' y devuelva un nuevo objeto donde las claves sean los ids y los valores sean los objetos completos.
Ejemplo de entrada:
[
{id: '123',nombre: 'Juan'},  
{id: '456',nombre: 'Ana'},
]
*/

function indexarPorId(array){
    return array.reduce((objetoIndexado, item)=> {
        objetoIndexado[item.id]=item;
        return objetoIndexado;
    },{});   
    }

    const usuariosConId=[        
        {id: '123', nombre: 'Juan'},
        {id: '456', nombre: 'Ana'},
    ];

    console.log ("Objeto indexado con ID: ", indexarPorId(usuariosConId));

    //document.getElementById('ejercicio04').innerText = `Objeto indexado con ID: ${JSON.stringify(indexarPorId(usuariosConId))}`;
