/**
 *  As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. 
 * Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

let numMacas = parseInt(prompt("Quantas maçãs quer comprar?"))

 var element = document.getElementById("textoResultado");
 if (numMacas >= 12) {
    element.innerHTML = `O preço das maçãs é R$ ${numMacas*1}`
}else {
    element.innerHTML = `O preço das maçãs é R$ ${numMacas*1.30}`
}

 