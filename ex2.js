function contarNumerosPares(array) {
    let contagemPares = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            contagemPares++;
        }
    }

    if (contagemPares === 0) {
        console.log("Não há números pares.");
    } else {
        console.log(`Quantidade de números pares: ${contagemPares}`);
    }
}

// Exemplo de uso:
const numeros = [1, 3, 5, 7, 9]; // Altere para testar com diferentes arrays
contarNumerosPares(numeros);
