const array = [{
    id: 5,
    nome: 'Maria',
    idade: 50
},
{
    id: 6,
    nome: 'Joao',
    idade: 32
},
{
    id: 7,
    nome: 'Ana',
    idade: 18
}
]

//pessoas com idade maior que 13
const pessoasMaioresDeIdade = array.filter(item => item.idade > 20)
console.log(pessoasMaioresDeIdade)

const pessoasId7 = array.filter(item => item.id === 7)
console.log(pessoasId7)

const pessoa7 = array.find(item => item.id === 7)
console.log(pessoa7, pessoa7.nome, pessoa7.idade)