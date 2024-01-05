// while - Comandos de repetição
// while (expressão lógica){
//     comando 1
//     comando 2
//     comando 3
// }
// Os comandos de 1 a 3 serão executados várias vezes enquanto a expressão lógica for verdadeira
// */

let n = 1

while (n <= 10) {
    if (n % 2 === 0) {
        console.log(n)
    }
    n++
}