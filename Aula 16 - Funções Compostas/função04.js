//Calcular fatorial
//Ex: 5! = 5 x 4 x 3 x 2 x 1
function fatorial(num) {
    var fat = 1
    for (var c = num; c > 1; c--) {
        fat *= c
    }
    return fat

}
console.log(fatorial(5))