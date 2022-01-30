//link para a funcão adicionar
var adic = document.querySelector('#adic')
adic.addEventListener('click', adicionar)

//link para a função finalizar
var final = document.querySelector('#final')
final.addEventListener('click', finalizar)

//Declaração de variáveis para link com o doc
var num = document.querySelector('#numtxt')
var anali = document.querySelector('#anali')
var res = document.querySelector('#res')


//declaraçáo do vetor
var valores = []

//Teste se o número está no intervalo de 1 a 100
/*O valor da variável num (num.value) é passado como parâmetro para a funcão isNumber através do (n), que compara se ela é maior ou
igual a 1 e menor ou igual a 100*/
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//Teste se o número inserido já se encontra na lista
/*O valor da variável num (num.value) é passado como parâmetro para a funcão inLista através do (n), 
e o vetor (valores) é passado como parâmetro para a funcão inLista através do (l)*/
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //Procura na lista l o posicão no numero n, se não acha retorna verdadeiro, pq quando o indexOf não acha um numero ele retorna -1
        return true
    } else {
        return false
    }
}

function adicionar() {

    //isNumber é a função que vai armazenar os números
    //inLista é a função que vai analizar a lista
    if (isNumber(num.value) && !inLista(num.value, valores)) { //!inLista (não em lista), ou seja analise se é número e NÃO está na lista
        valores.push(Number(num.value)) //Adiciona os valores no vetor
        var item = document.createElement('option') //Cria o elemenmto 'option' e insere na tag select
        item.text = `Valor ${num.value} adiconado`
        anali.appendChild(item) //Faz o valor aparecer no select 
        res.innerHTML = '' //Limpa o que está a aparecer na div res se um novo valor é inserido
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //Limpa o input após inserirmos o número
    num.focus() //Coloca o cursos do mouse no input
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adiciona valores antes de finalizar')
    } else {
        var totElem = valores.length //Qtd de elementos do vetor
        var maior = valores[0] //No início o menor número está na posição 0
        var menor = valores[0] //No início o maior número está na posição 0
        var soma = 0
        var media = 0

        /*for (var pos in valores)*/ //nova forma de chamar o FOR
        for (var pos = 0; pos < valores.length; pos++) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
        }
        media = soma / totElem

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totElem} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>Somando os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
