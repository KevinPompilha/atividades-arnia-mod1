const getPosts = async () => {
    const requisicao = await fetch('http://localhost:3000/posts')
    const posts = await requisicao.json()

    return posts
}
const mostrarPosts = (posts) => {
    const postsDiv = document.querySelector('.posts')

    posts.forEach(post => {
        postsDiv.innerHTML = postsDiv.innerHTML + `<div>${post.id} - ${post.titulo}</div>`
    })
}

const carregarDados = async () => {
    const postagens = await getPosts()
    
    mostrarPosts(postagens)

}
carregarDados()