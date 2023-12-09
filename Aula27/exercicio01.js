
const io = require('../io/io')


const processarArray = (numeros) => {
    numeros = numeros.filter((numero) => numero % 2 !== 0)

    console.log(numeros)

    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

    console.log(soma)


    for(let i = 0; i < soma;  i++)
        console.log('JavaScript é muito bom" :)')



}


processarArray([1, 3, 4, 5, 9])
