const formulario = document.getElementById('form')
let id = null

//editar o livro na API através do ID
const editarNoticia = async (id, noticia) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noticia)
    })

}

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault() // evitar que as informações do fomulario sejam enviadas pra URL
    const titulo = formulario.elements['titulo'].value
    const autor = formulario.elements['autor'].value
    const imagem = formulario.elements['img'].value
    const texto = formulario.elements['texto'].value

    const objetoNoticia = {
        titulo,
        autor,
        img: imagem,
        texto
    }
    //chamar a função que edita o livro na API
    await editarNoticia(id, objetoNoticia)
    console.log(objetoNoticia)

    //redirecionar para a tela de listagem 
    window.location = '../index.html'
})
//buscar o livro na API e retornar o livro
const getNoticia = async (id) => {
    const request = await fetch(`http://localhost:3000/posts/${id}`)
    const noticia = await request.json()

    return noticia
}
//carregar os dados no formulário 
const carregarNoticiaFormulário = (noticia) => {
    document.getElementById('titulo').value = noticia.titulo
    document.getElementById('autor').value = noticia.autor
    document.getElementById('img').value = noticia.img
    document.getElementById('texto').value = noticia.texto
}
const carregarDados = async () => {
    //1º recupera parâmetros da URL (formato de string)
    const parametros = window.location.search
    //transforma os parametros para o formato de objeto da classe URLSearchParams
    const objetoParametros = new URLSearchParams(parametros)
    //acessa o parâmetro desejado (id)
    id = objetoParametros.get('id')


    //chama a função para buscar a notícia na API 
    const noticia = await getNoticia(id)

    carregarNoticiaFormulário(noticia)
}
carregarDados()

