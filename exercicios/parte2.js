function findLargest(numbers) {
    if (numbers.length == 0) {
        throw new Error("O array está vazio.");
    }
    return Math.max(...numbers);
}

// Exemplo de uso:
const numeros = [10, 20, 3, 40, 5];
console.log(findLargest(numeros)); // Saída: 40