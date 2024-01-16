const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    const codigo = formulario.elements['codigo'].value
    const nome = formulario.elements['nome'].value
    const categoria = formulario.elements['categoria'].value
    const preco = formulario.elements['preco'].value
    const quantidade = formulario.elements['quantidade'].value

    console.log(preco * quantidade)


    const card = document.querySelector('.card')
    const cardNome = document.querySelector('.card-nome')
    const cardCategoria = document.querySelector('.card-categoria')
    const cardPreco = document.querySelector('.card-preco')
    const cardQuantidade = document.querySelector('.card-quantidade')
    const cardTotal = document.querySelector('.card-total')

    card.innerHTML = 
    `
    <div id="produto">#${codigo} ${nome}</div>
    <div id="item">
        <div>Categoria</div>
        <div class="categoria">${categoria}</div>
    </div>
    <div id="item">
        <div>Preço</div>
        <div class="preco">R$:${preco}</div>
    </div>
    <div id="item">
        <div>Quantidade</div>
        <div class="quantidade">${quantidade}</div>
    </div>
    <h2 id="preco">${preco * quantidade}</h2>
    `

    

    
    
    // cardNome.innerHTML = ``
    // cardCategoria.innerHTML = ``
    // cardPreco.innerHTML = ``
    // cardQuantidade.innerHTML = ``
    // cardTotal.innerHTML = ``
})