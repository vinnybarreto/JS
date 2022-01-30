var amigo = {}
console.log(typeof (amigo))

var friend = []
console.log(typeof (friend))

//Em JS tanto o Array também é tratado como um objeto

var amigo = {
    nome: 'Marcelo',
    sexo: 'M',
    idade: 43,
    peso: 85.3,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p
    }
}
console.log(amigo) //Mostra todo o objeto

console.log(amigo.nome) //Mostra somente o conteúdo do atributo nome

console.log(`${amigo.nome} pesava ${amigo.peso} kg`) //Mostra conteúdo do atributo nome e do atributo peso

amigo.engordar(2)//Chamada da função passando como parâmetro para "p" o valor 2

console.log(`${amigo.nome} agora pesa ${amigo.peso} kg`) //Mostra conteúdo do atributo nome e do atributo peso
