var horario = document.querySelector('#horario')
var dia = new Date()
var hora = dia.getHours()
horario.innerHTML = `Agora são ${hora} horas`

if (hora > 12) {
    body.style.backgroundColor = 'black'
}

