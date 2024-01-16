const getPosts = async () => {
    const request = await fetch('http://localhost:3000/posts')
    const response = await request.json()
    return response
}
const mostrarPosts = (posts) => {
    const post = document.querySelector('.post')

    posts.forEach(elemento => {
        post.innerHTML += `
        <div class='container'>
            <div class='titulo'><h1>${elemento.titulo}</h1></div>
            <div class='autor'><i>${elemento.autor}</i></div>
            <div class='container-texto'>
                <img class='img' src='${elemento.imagem}'/>
                <span class='texto'>${elemento.texto}</span> 
            </div>
        </div>
        `
    });
}
const carregarDados = async () => {
    const postagens = await getPosts() //aguardando a resposta da função getPosts para ir para a próxima linha
    mostrarPosts(postagens)
}
carregarDados()