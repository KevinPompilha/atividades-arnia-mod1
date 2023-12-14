let io = require('../io/io')

let n = ''

io.write('Digite o seu nome: ')

n = io.read()

io.write('Olá ' + n)