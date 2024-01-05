let io = require("./io")

io.write("Digite um número inteiro")
let n = io.readInt()
if (n%2==0){
    io.write("Número Par")
}
else{
    io.write("Número Ímpar")
}