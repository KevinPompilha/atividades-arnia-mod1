const getPosts = async () => {
    const request = await fetch('http://localhost:3000/posts')
    const response = await request.json()
    return response
}
const excluirNoticia = async (id) =>{
    await fetch(`http://localhost:3000/posts/${id}`,{
        method:'DELETE'
    })
    carregarDados()
}

const editarNoticia = (id) =>{
    window.location = `html/editar.html?id=${id}`
}


const mostrarPosts = (posts) => {
    const post = document.querySelector('.post')
    
    post.innerHTML = ''

    posts.forEach(elemento => {
        post.innerHTML += `
            <div class='container'>
                <div class='titulo'><h1>${elemento.titulo}</h1></div>
                <div class='autor'><i>${elemento.autor}</i></div>
                <div class='container-texto'>
                    <img class='img' src='${elemento.imagem}'/>
                    <span class='texto'>${elemento.texto}</span> 
                </div>
                <a href="html/editar.html?id=${elemento.id}">Editar</a>
                <button onclick="editarNoticia('${elemento.id}')">Editar</button>
                <button onclick="excluirNoticia('${elemento.id}')">Excluir</button>
            </div>
        `
    });
}
const carregarDados = async () => {
    const postagens = await getPosts() //aguardando a resposta da função getPosts para ir para a próxima linha
    mostrarPosts(postagens)
}
carregarDados()