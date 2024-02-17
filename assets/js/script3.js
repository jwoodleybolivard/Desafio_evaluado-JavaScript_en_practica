// Obtener las referencias a los elementos de entrada por su ID
const entradaValor1 = document.getElementById("valor1");
const entradaValor2 = document.getElementById("valor2");

// Agregar un manejador de eventos al botón de resta
document.getElementById("btn-restar").addEventListener("click", function () {
    // Obtener los valores numéricos de los campos de entrada
    const valor1 = Number(entradaValor1.value);
    const valor2 = Number(entradaValor2.value);

    // Calcular la resta y almacenar el resultado
    const resultadoResta = valor1 - valor2;

    // Verificar si el resultado es negativo y actualizar el contenido del elemento con clase "resultado"
    if (resultadoResta < 0) {
        document.querySelector(".resultado").textContent = 0;
    } else {
        document.querySelector(".resultado").textContent = resultadoResta;
    }
});

// Agregar un manejador de eventos al botón de suma
document.getElementById("btn-sumar").addEventListener("click", function () {
    // Obtener los valores numéricos de los campos de entrada
    const valor1 = Number(entradaValor1.value);
    const valor2 = Number(entradaValor2.value);

    // Calcular la suma y actualizar el contenido del elemento con clase "resultado"
    const resultadoSuma = valor1 + valor2;
    document.querySelector(".resultado").textContent = resultadoSuma;
});
