// const frutas = ['manzana', 'banana', 'mango', 'uva', 'cereza'];

// 1. map(): Transformar las frutas a mayúscula
// Pseudocódigo
// Recorrer cada fruta en el array.
// Convertir cada fruta a mayúsculas.
// Guardar el nuevo array con las frutas transformadas.
// 2. filter(): Filtrar las frutas que tienen más de 5 letras
// Pseudocódigo
// Recorrer cada fruta del array.
// Verificar si la longitud de la fruta es mayor a 5.
// Si cumple, incluirla en el nuevo array
// 3. reduce(): Contar el total de letras de todas las frutas
// Pseudocódigo
// Empezar con un contador inicial en 0.
// Recorrer cada fruta del array.
// Sumar la longitud de cada fruta al contador.
// Al final, devolver el total.


// Apartado 1
const frutas = ['manzana', 'banana', 'mango', 'uva', 'cereza','peladillo'];
const frutasMayusculas = frutas.map(fruta=>fruta.toUpperCase());
frutasMayusculas.forEach(fruta => console.log(fruta));
console.log(frutasMayusculas);
// Apartado 2
frutas5Letras= frutas.filter(fruta=>fruta.length>5);
frutas5Letras.forEach(fruta => console.log(fruta));
console.log(frutas5Letras);
// Apartado 3
const letrasTotal = frutas.reduce((acumulado, fruta)=>acumulado+fruta.length,0)
console.log(letrasTotal);
