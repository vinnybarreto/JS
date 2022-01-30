var ver = document.querySelector('#verificar')
ver.addEventListener("click", verifica)
var res = document.querySelector('#res')


function verifica() {
    var anotxt = document.querySelector('#ano')
    //var foto = document.querySelector('#foto')
    var anonum = Number(anotxt.value)
    var agora = new Date()
    var anoatual = agora.getFullYear()


    if (anonum == 0 || anonum > anoatual) {
        alert('[ERRO]! Verifiquei os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') //Guarda na variável o valor de ratio 
        var resultado = anoatual - anonum //calculo do resultado
        //var genero = ''
        var img = document.createElement('img') //cria uma tag imagem no doc HTML
        img.setAttribute('id', 'foto') //Seto o atributo id com o nome foto

        if (fsex[0].checked) { //Verifica se o primeiro ratio que foi selecionado
            //genero = "Homem"
            if (resultado <= 2) {
                res.innerHTML = `Você tem ${resultado} anos é um bebezinho`
                img.setAttribute('src', 'Bebezinho.png')
            }
            else if (resultado < 13) {
                res.innerHTML = `Você tem ${resultado} anos é um menino`
                img.setAttribute('src', 'Menino.png')
            } else if (resultado < 18) {
                res.innerHTML = `Você tem ${resultado} anos é um rapaz`
                img.setAttribute('src', 'Rapaz.png')
            } else if (resultado < 60) {
                res.innerHTML = `Você tem ${resultado} anos é um homem`
                img.setAttribute('src', 'Homem.png')
            } else {
                res.innerHTML = `Você tem ${resultado} anos é um senhor`
                img.setAttribute('src', 'Senhor.png')
            }
        }
        else if (fsex[1].checked) {//Verifica se o primeiro ratio que foi selecionado
            //genero = "Mulher"
            if (resultado <= 2) {
                res.innerHTML = `Você tem ${resultado} anos é uma bebezinha`
                img.setAttribute('src', 'Bebezinha.png')
            }
            else if (resultado < 13) {
                res.innerHTML = `Você tem ${resultado} anos é uma menina`
                img.setAttribute('src', 'Menina.png')
            } else if (resultado < 18) {
                res.innerHTML = `Você tem ${resultado} anos é uma moça`
                img.setAttribute('src', 'Moça.png')
            } else if (resultado < 60) {
                res.innerHTML = `Você tem ${resultado} anos é uma mulher`
                img.setAttribute('src', 'Mulher.png')
            } else {
                res.innerHTML = `Você tem ${resultado} anos é uma senhora`
                img.setAttribute('src', 'Senhora.png')
            }
        }
        res.appendChild(img) //apresentação das fotos
    }







    /*else if (resultado <= 2) {
        res.innerHTML = `Você tem ${resultado} anos é um bebê`
        //foto.style.display = 'block'
        foto.src = '../Exercício 15/Images/bebeMenino.png'
        console.log(foto)
    } else if (resultado < 13) {
        res.innerHTML = `Você tem ${resultado} anos é um criança`
        foto.src = '../Exercício 15/Images/Menino.png'
        console.log(foto.src)
    } else if (resultado < 18) {
        res.innerHTML = `Você tem ${resultado} anos é um adolescente`
    } else if (resultado < 60) {
        res.innerHTML = `Você tem ${resultado} anos é um adulto`
    } else {
        res.innerHTML = `Você tem ${resultado} anos é um idoso`
    }*/

}
