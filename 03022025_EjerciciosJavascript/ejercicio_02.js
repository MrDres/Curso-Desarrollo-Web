/* COMBINAR OBJETOS
Crear una funcion combinarObjetos que reciba dos objetos y devuelva un nuevo objeto que combine sus propiedades. Si hay claves repetidas, se debe conservar el valor del segundo objeto.
Ejemplo de entrada:
{a: 1, b: 2} y {b: 3, c: 4}
Salida esperada: {a:1, b:3, c:4}
*/
function combinarObjetos(obj1,obj2){
    return {...obj1,...obj2};
}
const obj1={a: 1, b: 2};
const obj2={b: 8, c: 4};

console.log("Objetos combinados: ", combinarObjetos(obj1,obj2));

document.getElementById('ejercicio02').innerText=`Objetos combinado: $(JSON.stringify(combinarObjetos(obj1,obj2))}`;