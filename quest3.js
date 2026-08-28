const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function contarParesEImpares(lista) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log(`Pares: ${pares}, Ímpares: ${impares}`);
}

contarParesEImpares(listaNumeros);