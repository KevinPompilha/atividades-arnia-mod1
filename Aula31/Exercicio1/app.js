const carregarEstilo = () => {
    document.getElementById('titulo').classList.add('h1')
    document.querySelector('#body').classList.add('body')
    document.querySelector('#textos').classList.add('section')
    document.querySelector('#firstparagraph').classList.add('paragrafos')
    document.querySelector('#secondparagraph').classList.add('paragrafos')
    document.querySelector('#thirdparagraph').classList.add('paragrafos')


}

const modoEscuro = () => {
    if (document.getElementById('body').classList.contains('dark')) {
        document.body.classList.remove('dark')
    } else {
        document.body.classList.add('dark')
    }

}