function encontrarPrimeiroNegativo(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < 0) {
            console.log(`Primeiro número negativo encontrado: ${lista[i]}`);
            return; // Interrompe o loop
        }
    }
    console.log("Não há números negativos na lista.");
}

// Exemplo de uso
const numeros = [1, 2, -3, 4, 5];
encontrarPrimeiroNegativo(numeros);
