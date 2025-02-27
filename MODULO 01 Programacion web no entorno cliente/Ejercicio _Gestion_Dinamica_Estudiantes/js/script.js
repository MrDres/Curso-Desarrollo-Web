
let estudiantes = ["Rubén", "Yoli", "André"];
let estudiantes2 = ["Ricardo", "Marina"];
const listaEstudiantes = estudiantes.concat(estudiantes2);
document.addEventListener("DOMContentLoaded", () => {
    const addStudentBtn = document.getElementById("btnAddStudent");
    const btnRemoveStudent = document.getElementById("btnRemoveStudent");
    let nuevoEstudiante = document.getElementById("nuevoAlumno");

    btnAddStudent.onclick = function () {

        listaEstudiantes.push(nuevoEstudiante.value);
        alert(listaEstudiantes);
    }
});

