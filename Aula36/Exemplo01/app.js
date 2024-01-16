
const timestamp = (new Date()).getTime()
const publicKey = '61a9bca99fba312573d61d86d18c7fca'
const privateKey = '7d64f08662454033ca2761ff5780fc9124be193d'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
    .then(respostaHttp => respostaHttp.json())
    .then(resposta => {
        console.log(resposta.data.results)
        const personagens = resposta.data.results
        const content = document.querySelector('#content')
        
        personagens.forEach(personagem => {

            let revista = personagem.comics.items.filter((item,index) =>{
                return index < 2
            })
            
             let quadrinhos = ''

             revista.forEach(quadrinho =>{
                quadrinhos += 
                `
                <h2>${quadrinho.name}</h2>
                `
             })   

             let series = personagem.series.items.filter((item, index) =>{
                return index < 2
             })
            
             let nomeSeries = ''

             series.forEach(serie =>{
                nomeSeries += 
                `
                <h2>${serie.name}</h2>
                `
             })   

            content.innerHTML = content.innerHTML +
                `
            <div>
                ${personagem.name}
                <img class='imagem' src = "${personagem.thumbnail.path}.${personagem.thumbnail.extension}">
                <p>Quadrinhos</p>
                ${quadrinhos}
                <p>Séries</p>
                ${nomeSeries}
            </div>
            `

        })

    })
