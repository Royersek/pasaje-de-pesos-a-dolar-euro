const formulario = document.getElementById('formulario');
const inputDolares = document.getElementById('dolares');
const resultado = document.getElementById('resultado');
const valorDolarBlue = 1170; // valor del dólar blue en pesos argentinos

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const dolares = parseFloat(inputDolares.value);
    if (!isNaN(dolares)) {
        const pesos = dolares * valorDolarBlue;
        resultado.textContent = `${dolares} dólares equivalen a ${pesos.toFixed(2)} pesos argentinos`;
    } else {
        resultado.textContent = 'Ingrese un valor válido porfavor';
    }
});


const formulario2 = document.getElementById('formulario2');
const inputEuros = document.getElementById('euros');
const resultadoEuros = document.getElementById('resultadoEuros');
const valorPesoEuro = 2000; // valor del peso argentino en euros

formulario2.addEventListener('submit', (e) => {
    e.preventDefault();
    const euros = parseFloat(inputEuros.value); // Define la variable euros
    if (!isNaN(euros)) {
        const pesos = euros * valorPesoEuro;
        resultadoEuros.textContent = `${euros} pesos argentinos equivalen a ${euros.toFixed(2)} euros`;
    } else {
        resultadoEuros.textContent = 'Ingrese un valor válido';
    }
});