let io = require("./io")

/*
if (expressão lógica) {
   comando1
   comando2
   comando3
}
else{
    comandoa
    comandob
}

os comandos de 1 a 3 serão executados se a expressão lógica for verdadeira
os comandos a e b serão executados soemtne se a expressão lógica for falsa

*/
io.write("Qual seu time de futebol? ")
let n = io.read()
if (n == "Galo"){
    io.write("Você é um Gênio")
    io.write("Bora comer pão de queijo?")
}
else{
    io.write("rapaz, tome tendência")
}
io.write("Obrigado")