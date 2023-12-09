const io = require('../io/io')


//Mostrar uma mensagem para o usuário
io.write('Digite um número para multiplicá-lo por 2: ')
//Receber o número do usuário
const numero = io.readInt()

//Feedback para o usuário
io.write(`Obrigado! O número digitado foi: ${numero}.`)
//Dobrar o número digitado
const resultado = numero *2

//Mostrar o resultado do calculo (número dobrado)
io.write(`O dobro do número ${numero} é: ${resultado}`)

