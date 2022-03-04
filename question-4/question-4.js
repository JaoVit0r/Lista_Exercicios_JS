/**
 * Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
 * Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: 
 * 
 *      mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5))/10
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

let nota1 = parseInt(prompt("Digite a nota 1"))
let nota2 = parseInt(prompt("Digite a nota 2"))
let nota3 = parseInt(prompt("Digite a nota 3"))

let mediaFinal = ((nota1*2)+(nota2*3)+(nota3*5))/10

 var element = document.getElementById("textoResultado");
 element.innerHTML = `A média final do(a) aluno(a) é ${mediaFinal}`