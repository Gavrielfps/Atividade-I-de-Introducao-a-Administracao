function encontrarRepetidos(lista) {
    let repetidos = [];
    
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] === lista[j] && !repetidos.includes(lista[i])) {
                repetidos.push(lista[i]);
            }
        }
    }
    return repetidos;
}

console.log(encontrarRepetidos([1, 2, 3, 2, 4, 5, 1, 2]));