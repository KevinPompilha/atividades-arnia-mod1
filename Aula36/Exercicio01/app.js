const timestamp = (new Date()).getTime()
const publicKey = '61a9bca99fba312573d61d86d18c7fca'
const privateKey = '7d64f08662454033ca2761ff5780fc9124be193d'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise
    .then(respostaHttp => respostaHttp.json())
    .then(resposta => {
        console.log(resposta.data.results, 'teste')

        const content = document.querySelector('#content')

        resposta.data.results.forEach(element => {
            const personagens = element.name
            const descricao = element.description
            const imagem = element.thumbnail.path
            const charClass = element.thumbnail.extension
            content.innerHTML += `
            <div>${personagens}</div>
            <div>${descricao}</div>
            <img src='${imagem}.${charClass}' width = '300px'/>
            `
        });

        resposta.data.results.filter((elemento)=>{
            
            
        })   
        
             



    })