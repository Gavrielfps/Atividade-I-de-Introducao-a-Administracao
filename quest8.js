const numerosDesordenados = [5, 3, 8, 1, 2];

function ordenarCrescente(lista) {
    let n = lista.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return lista;
}

console.log(ordenarCrescente(numerosDesordenados));