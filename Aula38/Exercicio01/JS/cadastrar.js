const formulario = document.querySelector('.form')

const cadastrarNoticia = async (objetoNoticia) => {
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoNoticia)
    })

}
formulario.addEventListener('submit', async(evento) =>{
    evento.preventDefault()
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const imagem = formulario.elements['img'].value
    const texto = formulario.elements['texto'].value

    const objetoNoticia = {
        titulo,
        autor,
        img:imagem,
        texto
    }
    
    await cadastrarNoticia(objetoNoticia)
    console.log(objetoNoticia)

    window.location = '../index.html'
})