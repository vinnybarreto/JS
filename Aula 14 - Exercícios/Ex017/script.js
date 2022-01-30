var initxt = document.querySelector('#initxt')
var fimtxt = document.querySelector('#fimtxt')
var pastxt = document.querySelector('#pastxt')
var cont = document.querySelector('#cont')
var res = document.querySelector('#result')

cont.addEventListener('click', contar)


function contar() {
    var ini = Number(initxt.value)
    var fim = Number(fimtxt.value)
    var pas = Number(pastxt.value)

    if (pas == 0) {
        alert('Passo inválido"! Considerando passo 1')
        pas = 1
    }
    if (initxt.value.length == 0 || fimtxt.value.length == 0 || pastxt.value.length == 0) {
        res.innerHTML = '<p>Impossível contar!</p>'
        //alert('[ERRO] - Faltam dados!')
    } else if (ini <= fim && pas <= fim) {
        res.innerHTML = '<p>Contando:</p>'
        while (ini <= fim) {
            res.innerHTML += ini + ' ' + '\u{1F449}'//Emoji
            ini = (ini + pas)
        }
        res.innerHTML += '\u{1F3C1}'
    } else if (ini <= fim && pas > fim) {
        alert('[ERRO] - O número inserido no campo Passo deve ser menor do que o número inserido no campo Fim')
    }
    else if (ini >= fim && pas <= ini) {
        res.innerHTML = '<p>Contando:</p>'
        while (ini >= fim) {
            res.innerHTML += ini + ' ' + '\u{1F449}'//Emoji
            ini = (ini - pas)
        }
        res.innerHTML += '\u{1F3C1}'
    } else if (ini >= fim && pas > ini) {
        alert('[ERRO] - O número inserido no campo Passo deve ser menor do que o número inserido no campo Início')
    }

}

/*--LINK DOS EMOJIS https://unicode.org/emoji/charts/full-emoji-list.html--*/

/*--GUNANABARA--*/

/*var cont = document.querySelector('#cont')
cont.addEventListener('click', contar)

function contar() {
    var initxt = document.querySelector('#initxt')
    var fimtxt = document.querySelector('#fimtxt')
    var pastxt = document.querySelector('#pastxt')
    var res = document.querySelector('#result')
    if (initxt.value.length == 0 || fimtxt.value.length == 0 || pastxt.value.length == 0) {
        alert('[ERRO] - Faltam dados!')
    } else {
        res.innerHTML = '<p>Contando:</p>'
        var ini = Number(initxt.value)
        var fim = Number(fimtxt.value)
        var pas = Number(pastxt.value)
        if (pas == 0) {
            alert = ('Passo inválido"! Considerando passo e')
            pas = 1
        }
        if (ini > fim) {
            //Contagem crescente
            for (var c = 1; c <= fim; c++) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            //Contagem regressiva
            for (var c = 1; c >= fim; c++) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}*/







