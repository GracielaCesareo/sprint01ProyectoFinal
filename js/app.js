var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes.nombreEstudiante + " " + estudiantes.porcentajeTecnico + " " + estudiantes.porcentajeEmocionales;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombreEstudiante = prompt ("Escribe el nombre de la estudiante");
    var porcentajeTecnico = prompt ("Cuál es el porcentaje técnico");
    var porcentajeEmocionales = prompt ("Cuál es el porcentaje de HSE?");

    var estudiante = {};
    estudiante.nombreEstudiante = nombreEstudiante;
    estudiante.porcentajeTecnico = porcentajeTecnico;
    estudiante.porcentajeEmocionales = porcentajeEmocionales;
    estudiantes.push(estudiante);

    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.porcentajeTecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.porcentajeEmocionales + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    for (var i = 0; i < estudiantes.length; i++) {

      return mostrar ();
    }

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    for (var i = 0; i < estudiantes.length; i++) {
      if (nombre.toLowerCase() == estudiantes[i]) {
        return ;
      }
    }
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

    /*estudiantes.sort(function(a - b)) {
        return a.porcentajeTecnico > b.porcentaje;
    }*/
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

    /*estudiantes.sort(function (a - b)) {
      return a.porcentajeEmocionales > b.porcentajeEmocionales;
    }*/
}
