function encontrarMaiorNumero(array) {
    let maiorNumero = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }

    console.log(`O maior número encontrado é: ${maiorNumero}`);
}

// Exemplo de uso
const numeros = [1, 5, 3, 9, 2];
encontrarMaiorNumero(numeros);
