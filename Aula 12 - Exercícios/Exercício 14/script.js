function carregar() {
    var horario = document.querySelector('#horario')
    var foto = document.querySelector('#foto')
    var dia = new Date()
    var hora = dia.getHours()
    horario.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        foto.src = "../Exercício 14/Images/FotoManhã.png"
        document.body.style.backgroundColor = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        foto.src = '../Exercício 14/Images/FotoTarde.png'
        document.body.style.backgroundColor = "#b9846f"
    } else {
        foto.src = "../Exercício 14/Images/FotoNoite.png"
        document.body.style.backgroundColor = "#515154"
    }

}