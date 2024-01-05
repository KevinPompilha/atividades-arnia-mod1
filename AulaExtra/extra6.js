/*
Expressões lógicas

uma expressão é inteira se seu resultado é um número inteiro
uma expressão é lógica se seu resultado é um valor lógico, ou seja, 
verdadeiro ou falso

boolean = {true,false}

Os operadores de comparação a saber: ==, !=, <, <= etc tem resultado lógico

Os operadores lógicos são:
&& - Leia-se e: resultado é verdadeiro se ambaos operando são verdadeiros
|| - Leia-se ou: resultado é verdadeiro se um operando for verdadeiro
*/

console.log(3 > 2)
console.log((3 > 2) && (2==1))
console.log((3 > 2) || (2==1))
console.log(!(3>2))
console.log(!0)//fiquem espertos com isto, penso que deve ser evitado