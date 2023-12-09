const io = require('../io/io')

io.write('Informe um número: ')
const num = io.readInt()
// let resutado = ''

// if (num === 10) {
//     resultado = 'O número é igual a 10'
// }else {
//     resultado = 'O número é diferente de 10'
// }

num === 10 ? 'O número é igual a 10' : 'O número é diferente de 10'

io.write()