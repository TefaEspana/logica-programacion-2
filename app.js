const campoCelsius = document.getElementById("celsiusInput");
const botonConvertir = document.getElementById("convertirBtn");
const resultadoKelvin = document.getElementById("kelvinResult");
const resultadoFahrenheit = document.getElementById("fahrenheitResult");
const mensajeDeError = document.getElementById("mjserror");
const seccionResultados = document.getElementById("resultados");

//escuchador de eventos al botón "Convertir"
botonConvertir.addEventListener("click", function() {
    //el valor ingresado en el campo de Celsius y eliminar espacios en blanco
    const valorCelsiusTexto = campoCelsius.value.trim();

    // Verificar si el usuario no ingresó nada
    if (valorCelsiusTexto === "") {
        // Mostrar el mensaje de error
        mensajeDeError.style.display = "block";
        // Ocultar la sección de resultados
        seccionResultados.style.display = "none";
        // Detener la ejecución de la función aquí
        return;
    }

    // si tiene valor convertirlo a un numero decimal
    const gradosCelsius = parseFloat(valorCelsiusTexto);

    // Verificar la conversión a número (o si no es numero)
    if (isNaN(gradosCelsius)) {
        // Mostrar el mensaje de error
        mensajeDeError.style.display = "block";
        // Ocultar la sección de resultados
        seccionResultados.style.display = "none";
        // Detener la ejecución de la función aquí
        return;
    }

    // Si, si pasa el valor es valido entonces el mensaje de error
    mensajeDeError.style.display = "none";

    // Calcular los grados Fahrenheit
    const gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;

    // Calcular los grados Kelvin
    const gradosKelvin = gradosCelsius + 273.15;

    // Mostrar la sección de resultados
    seccionResultados.style.display = "block"

    // Mostrar los resultados (con 2 decimales)
    resultadoKelvin.textContent = gradosKelvin.toFixed(2);
    resultadoFahrenheit.textContent = gradosFahrenheit.toFixed(2);

});