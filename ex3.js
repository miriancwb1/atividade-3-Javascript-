function encontrarNumeroEspecifico(array, numero) {
    let encontrado = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            console.log(`Número ${numero} encontrado no índice ${i}.`);
            encontrado = true;
            break; // Interrompe o loop ao encontrar o número
        }
    }

    if (!encontrado) {
        console.log(`Número ${numero} não encontrado no array.`);
    }
}

// Exemplo de uso:
const numeros = [1, 3, 5, 7, 9];
const numeroProcurado = 5; // Altere para testar com diferentes números
encontrarNumeroEspecifico(numeros, numeroProcurado);

