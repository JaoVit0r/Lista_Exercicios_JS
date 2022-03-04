/**
 * Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

let salarioMensalAtual = parseInt(prompt("Digite o salário mensal"))
console.log(`Seu salário atual é R$ ${salarioMensalAtual}`)
let percentualReajuste = parseInt(prompt("Digite o percentual de reajuste"))

let salarioMensalReajustado = salarioMensalAtual - (salarioMensalAtual*(percentualReajuste/100))
console.log(`Seu salário reajustado é R$ ${salarioMensalReajustado}`)

var element = document.getElementById("textoResultado");
element.innerHTML = `Seu salário reajustado é R$ ${salarioMensalReajustado}`

