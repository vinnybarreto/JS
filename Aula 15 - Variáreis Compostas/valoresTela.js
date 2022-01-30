var valores = [8, 1, 7, 4, 2, 9]
console.log(valores)

//Forma tradicional
for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

var novoVetor = [10, 5, 6, 9, 2, 4]
console.log(novoVetor)

//Formal simplicidada (atual)
for (pass in novoVetor) {
    console.log(`A posição ${pass} tem o valor ${novoVetor[pass]}`)
}

var inde = novoVetor.indexOf(4)
console.log(`O valor 4 está na posição ${inde}`)