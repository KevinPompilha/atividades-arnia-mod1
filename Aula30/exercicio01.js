// Escreva uma função chamada somarValores que recebe um
// array de números e retorna a soma de todos os valores do array
// utilizando a função reduce.
// ❖ Exemplo de uso:
// const numeros = [1, 2, 3, 4, 5]
// const resultado = somarValores(numeros)
// console.log(resultado) // Output: 15



function somarValores(numeros){
    
    const soma = numeros.reduce((acumulador, elemento )=>{
        return acumulador + elemento
    }, 0)
    return soma
}

const numeros = [1, 2, 3, 4, 5]
const resultado = somarValores(numeros)

console.log(resultado)