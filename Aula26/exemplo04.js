const io = require('../io/io')

const darBoasVindas = (nome) => {
    io.write(`Olá ${nome}`)
}

const receberUsuario = (fnBoasVindas, fnConfirmar) => {
    io.write('Informe o seu nome: ')
    const nome = io.read()
    darBoasVindas(nome)
}

receberUsuario(darBoasVindas, () => {
    io.write('Verifique seu e-mail e faça a confirmação!')
})
