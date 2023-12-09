const io = require('../io/io')

io.write('Informe um número maior do que 10: ')

const num = io.readInt()

if (num > 10) {
    io.write('É maior do que 10')
}

else {
    io.write('Não é maior do que 10')
}