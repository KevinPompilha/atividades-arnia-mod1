// Faça uma função que recebe a idade de uma pessoa em anos, meses e
// dias e retorna essa idade expressa em dias.
const io = require('../io/io')


function idadeEmDias(anos, meses, dias){
    const diasPorAno = anos * 365
    const diasPorMes = meses * 30
    const resultado = diasPorAno + diasPorMes + dias

    return resultado
}

io.write('Escreva quantos anos você tem: ')
const anos = io.readInt()

io.write('Escreva quantos meses: ')
const meses = io.readInt()

io.write('Escreva a quantidade de dias: ')
const dias = io.readInt()

const resultado = idadeEmDias(anos, meses, dias)
io.write(`A idade total em dias é: ${resultado}`)

