function elementosEmComum(lista1, lista2) {
    let resultado = [];
    
    for (let i = 0; i < lista1.length; i++) {
        let elemento = lista1[i];
        
        if (lista2.includes(elemento) && !resultado.includes(elemento)) {
            resultado.push(elemento);
        }
    }
    return resultado;
}

console.log(elementosEmComum([1, 2, 3, 4], [3, 4, 5, 6]));