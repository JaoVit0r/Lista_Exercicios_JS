/**
 * Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

var element = document.getElementById("textoResultado");
let valorN = parseInt(prompt("Digite um valor para N"))
if (valorN === 0) {
    valorN = parseInt(prompt("Digite um valor maior que 0"))
}
/*
N-1
*/
let valores = []
while (valorN > 0) {
    valores.push(valorN)
    valorN = valorN - 1  
}
console.log(valores.sort())

element.innerHTML = `Inteiros entre 1 e N: ${valores}` 

