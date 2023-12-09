//MAP - Alterar CONTEÚDO

const array = ['fulano', 'ciclano', 'beltrano']

const novoArray = array.map((item) =>{
    return `Olá, ${item}!`
})

console.log(novoArray)