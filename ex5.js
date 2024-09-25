function contarOcorrencias(array, valor) {
    let contagem = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            contagem++;
        }
    }

    console.log(`O valor ${valor} aparece ${contagem} vezes no array.`);
}

// Exemplo de uso
const numeros = [1, 2, 3, 2, 4, 2, 5]; // Altere o array e o valor para testar
const valorProcurado = 2;
contarOcorrencias(numeros, valorProcurado);
