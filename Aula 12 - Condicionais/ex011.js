var idade = 66
if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}
var idade2 = 66
console.log(`Você tem ${idade2} anos de idade`)
if (idade2 < 16) {
    console.log('Não vota')
} else if (idade2 < 18 || idade2 > 65) {
    console.log('Voto facultativo')
} else {
    console.log('Voto obrigatório')
}
