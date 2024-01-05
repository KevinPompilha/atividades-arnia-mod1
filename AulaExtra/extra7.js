let io = require("./io")

/*
if (expressão lógica) {
   comando1
   comando2
   comando3
}

os comandos de 1 a 3 serão executados se a expressão lógica for verdadeira

*/
io.write("Qual seu time de futebol? ")
let n = io.read()
if (n == "Galo"){
    io.write("Você é um Gênio")
    io.write("Bora comer pão de queijo?")
}
io.write("Obrigado")
