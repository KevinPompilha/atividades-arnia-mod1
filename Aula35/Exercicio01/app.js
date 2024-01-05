const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    const codigo = formulario.elements['codigo'].value
    const nome = formulario.elements['nome'].value
    const categoria = formulario.elements['categoria'].value
    const preco = formulario.elements['preco'].value
    const quantidade = formulario.elements['quantidade'].value

    const total = parseInt(preco.value) * parseInt(quantidade.value)

    const card = document.querySelector('.card')
    const cardNome = document.querySelector('.card-nome')
    const cardCategoria = document.querySelector('.card-categoria')
    const cardPreco = document.querySelector('.card-preco')
    const cardQuantidade = document.querySelector('.card-quantidade')
    const cardTotal = document.querySelector('.card-total')

    card.innerHTML = `${codigo} - ${nome}
    ${categoria}
    R$ ${preco}
    ${quantidade}
    ${total}
    `
    // cardNome.innerHTML = ``
    // cardCategoria.innerHTML = ``
    // cardPreco.innerHTML = ``
    // cardQuantidade.innerHTML = ``
    // cardTotal.innerHTML = ``
})