var tabu = document.querySelector('#tabu')
tabu.addEventListener('click', gerar)

function gerar() {
    var numtxt = document.querySelector('#num')
    var result = document.querySelector('#result')
    var num = Number(numtxt.value)

    if (numtxt.value.length == 0) {
        alert('Por favor digite um número')
    } else {
        result.innerHTML = '' //Limpa conteudo do label
        for (var i = 1; i <= 10; i++) {
            var mult = num * i
            var item = document.createElement('option') //Cria uma option na TAG label
            item.text = `${num} x ${i} = ${mult}`
            result.appendChild(item) //Chama método para apresentar elemento na tela
            result.value = `${i}`
        }
    }
}