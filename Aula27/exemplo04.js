const io = require('../io/io')

//FILTER - Filtra elementos de acordo com uma condição

const nomes = ['Maria', 'Fulano', 'Teste', 'Karina', 'Maria']

const marias = []

const nomesMarias = nomes.filter((item) => item === 'Maria' ) 

console.log(nomesMarias)