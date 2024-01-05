const alterarTitulo = () => {
    console.log('função alterar título')
    const elementoTitulo = document.querySelector('.titulo')
    
    console.log(elementoTitulo.innerHTML)
    elementoTitulo.innerHTML = 'Titulo Arnia'
}

const alterarEstilo = () => {
    const elementoTitulo = document.querySelector('.titulo')
    elementoTitulo.classList.add('titulo-estilo')
}