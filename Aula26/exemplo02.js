const io = require('../io/io')

function funcaoTradicional(){
    io.write('Essa é uma função Tradicional')
}

funcaoTradicional()

const funcaoAnonima = function() {
    io.write('Essa é uma funcão tradicional Anônima')
}

funcaoAnonima()

const funcaoArrow = () => {
    io.write('Esta é uma Arrow Function (sempre anônima)')
}

funcaoArrow()