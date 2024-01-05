const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Joao', idade: 17 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Claudio', idade: 37 },
]

const container = document.querySelector('.container')

pessoas.forEach((pessoa)=>{
    container.innerHTML = container.innerHTML +`
    <div>
    ${pessoa.nome} tem ${pessoa.idade} anos
    </div>
    `
    
})