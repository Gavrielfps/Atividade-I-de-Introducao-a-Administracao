function buscarValor(lista, valorProcurado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valorProcurado) {
            return `Valor ${valorProcurado} encontrado na posição ${i}.`;
        }
    }
    return `Valor ${valorProcurado} não foi encontrado.`;
}

console.log(buscarValor([10, 25, 30, 45], 30));