// Asociar el evento de envío del formulario a la función de manejo de eventos
document.getElementById("formulario").addEventListener("submit", function (event) {
    // Obtener el valor de los campos de entrada
    const nombreEntrada = document.getElementById("nombre").value;
    const asuntoEntrada = document.getElementById("asunto").value;
    const mensajeEntrada = document.getElementById("mensaje").value;

    // Expresión regular para validar solo caracteres alfabéticos de la "a" a la "z" y espacios
    const regex = /^[a-zA-Z ]+$/;

    // Verificar si los campos cumplen con la expresión regular
    if (!regex.test(nombreEntrada) || !regex.test(asuntoEntrada) || !regex.test(mensajeEntrada)) {
        // Si al menos un campo no cumple con la expresión regular

        // Validar y mostrar mensajes de error para campos individuales
        if (!regex.test(nombreEntrada)) {
            document.querySelector(".errorNombre").textContent = "El nombre es requerido";
        }

        if (!regex.test(asuntoEntrada)) {
            document.querySelector(".errorAsunto").textContent = "El asunto es requerido";
        }

        if (!regex.test(mensajeEntrada)) {
            document.querySelector(".errorMensaje").textContent = "El mensaje es requerido";
        }

        // Prevenir el envío del formulario si hay errores
        event.preventDefault();
    } else {
        // Si todos los campos cumplen con la expresión regular

        // Limpiar mensajes de error previos
        document.querySelector(".errorNombre").textContent = "";
        document.querySelector(".errorAsunto").textContent = "";
        document.querySelector(".errorMensaje").textContent = "";

        // Mostrar mensaje de éxito
        document.querySelector(".resultado").textContent = "Mensaje enviado con éxito !!!";
    }

    // Prevenir el envío del formulario
    event.preventDefault();
});

