function verificarTodosPositivos(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            console.log("Há um número negativo na lista.");
            return; // Interrompe o loop
        }
    }
    console.log("Todos os números são positivos.");
}

// Exemplo de uso
const numeros = [1, 2, 3, -4, 5];
verificarTodosPositivos(numeros);
