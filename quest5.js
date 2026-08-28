const listaOriginal = [10, 20, 30, 40];

function inverterLista(lista) {
    let listaInvertida = [];
    for (let i = lista.length - 1; i >= 0; i--) {
        listaInvertida.push(lista[i]);
    }
    return listaInvertida;
}

console.log(inverterLista(listaOriginal));