const timestamp = (new Date()).getTime()
const publicKey = '61a9bca99fba312573d61d86d18c7fca'
const privateKey = '7d64f08662454033ca2761ff5780fc9124be193d'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const mostrarDados = (resposta) =>{
    const divPersonagens = document.querySelector('.personagens')
        const personagens = resposta.data.results

        personagens.forEach(personagem => {
            divPersonagens.innerHTML += `
            <div>${personagem.id} - ${personagem.name}</div>
            
            `
        });
}

const buscarPersonagens = async () => {
    try {
        const respostaHttp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)
        const resposta = await respostaHttp.json()
        console.log(resposta)
        
       mostrarDados(resposta) 

    } catch (error) {
        console.log('erro', error)
    }


}

buscarPersonagens()

