function deslocarDireita(lista, x) {
    let novaLista = [];
    let tamanho = lista.length;
    
    for (let i = 0; i < tamanho; i++) {
        let novaPosicao = (i + x) % tamanho;
        novaLista[novaPosicao] = lista[i];
    }
    return novaLista;
}

console.log(deslocarDireita([1, 2, 3, 4, 5], 2));