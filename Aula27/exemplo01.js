//Mostrar DADOS

const io = require('../io/io')

const array = [1, 2, 3, 4, 5, 6]

// for(let i = 0; i < array.length; i++){
//     io.write(array[i])
// }

array.forEach((elemento) => {
    console.log(elemento)
})