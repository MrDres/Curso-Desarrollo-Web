/*Crear un sistema para gestionar estudiantes con sus calificaciones.Promediar y determinar quien aprueba (>=75)*/

const estudiantes = [
    { nombre: "Juan", calificaciones: [80, 85, 90] },
    { nombre: "Maria", calificaciones: [70, 75, 78] },
    { nombre: "Luis", calificaciones: [60, 64, 70] },
    { nombre: "Ana", calificaciones: [90, 92, 95] }
];
//Funcion para calcular el promedio de calificaciones de un estudiante
function calcularPromedio(calificaciones) {
    //reduce para tomar todas las calificaciones y dividimos por la cantidad de elementos
    const suma = calificaciones.reduce((acumulado, calificacion) => acumulado + calificacion, 0);
    // console.log("calcularPromedio");
    // console.log(suma / calificaciones.length);
    // console.log("suma", suma);
    // console.log("calcularPromedio aqui");
    return suma / calificaciones.length;
}
//Creo una nueva lista con el promedio de cada estudiante y si aprobaron
const estudiantesConPromedio = estudiantes.map(estudiante => {
    const promedio = calcularPromedio(estudiante.calificaciones);
    return {
        //mantener los datos originales de cada estudiante
        ...estudiante,
        promedio: promedio.toFixed(2),
        aprobado: promedio >= 75 ? "si" : "No",
    };
});
console.log("Listado completo de estudiantes: ", estudiantesConPromedio);
//filtrado solo de los estudiantes que aprobaron
const estudiantesAprobados = estudiantesConPromedio.filter(estudiante => estudiante.aprobado == "si");
//console.log("Estudiantes aprobados filtro", estudiantes.aprobado);
console.log("Estudiants aprobados: ", estudiantesAprobados);

