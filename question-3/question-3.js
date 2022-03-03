/**
 * O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
 * Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
 * calcular e escrever o custo final ao consumidor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
let custoFabrica = parseInt(prompt("Qual o custo de fábrica do carro?"))
let porcentagemDistribuidor = 28/100
let impostos = 45/100
let custoConsumidor = custoFabrica + custoFabrica*porcentagemDistribuidor + custoFabrica*impostos

console.log(`O preço do carro ao consumidor é de R$ ${custoConsumidor}`)





