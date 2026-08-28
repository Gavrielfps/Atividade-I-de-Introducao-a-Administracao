const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function calcularMedia(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma / lista.length;
}

console.log("Média:", calcularMedia(numeros));