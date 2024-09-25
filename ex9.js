function somaNumerosImpares(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            soma += array[i];
        }
    }

    console.log(`A soma total dos números ímpares é: ${soma}`);
}

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5];
somaNumerosImpares(numeros);
