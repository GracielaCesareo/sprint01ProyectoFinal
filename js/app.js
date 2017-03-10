var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombreEstudiante = prompt ("Escribe el nombre de la estudiante").toLowerCase();
    var porcentajeTecnico = parseInt(prompt ("Cuál es el porcentaje técnico"));
    var porcentajeEmocionales = parseInt(prompt ("Cuál es el porcentaje de HSE?"));

    estudiante = {
    nombre: nombreEstudiante,
    tecnico: porcentajeTecnico,
    emocionales: porcentajeEmocionales,
    }
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
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tecnico + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.emocionales + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    /*var lista = "";
    for (var i = 0; i < estudiantes.length; i++) {
      lista += mostrar (estudiantes[i]);
    }
    return lista;
    */

    //hace una iteracion con una funcion y se guarda en la variable vacia;
    var resultado = "";
    estudiantes.forEach(function(estudiante){
    return  resultado += mostrar(estudiante);
    });
    return resultado;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    /*var buscado = [];
    for (var i = 0; i < estudiantes.length; i++) {
      if (nombre.toLowerCase() == estudiantes[i].nombre) {
      buscado.push(estudiantes[i]);
      }
    }console.log(estudiantes[i]);
    return buscado;
    */

    var estudiantesBuscados = estudiantes.filter(function(estudiante){
    return estudiante.nombre.toLowerCase() === nombre;
    });
    return estudiantesBuscados;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

    var ordenTecnico = estudiantes.sort(function(a,b) {
        return b.porcentajeTecnico - a.porcentajeTecnico;
    });
    return ordenTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

    var ordenEmocional = estudiantes.sort(function (a,b) {
        return b.porcentajeEmocionales - a.porcentajeEmocionales;
    });
    return ordenEmocional;

}
