const getLivros = async () =>{
    const dados = await fetch('http://localhost:3000/livros')
    const livros = await dados.json()
    return livros
}
const mostrarLivros = (listalivros) =>{
    // const bodyTabela = 
    listalivros.forEach(livro => {
        
    });
}

const carregarDados = async () =>{
    const listaLivros = await getLivros()
    console.log(listaLivros)
    
}
carregarDados()

