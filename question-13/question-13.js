/**
 * Escreva um algoritimo que leia um vetor Q de 20 posições (aceitar somente números positivos). 
 * Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

var element = document.getElementById("textoResultado");
let valores = []
for (let index = 0;index < 20; index++) {
    let valor = parseInt(prompt(`Digite o ${index+1}º valor`))
    while (valor < 0) {
        valor = parseInt(prompt(`Digite um valor maior que 0`))
    }
    valores.push(valor)
    
}

leituraValores()
// 1 4 6 2 1 5 3 
let maiorValor = 0
for (let value of valores) {
    if (value > maiorValor) {
        maiorValor = value
    }
}

element.innerHTML = `O maior valor de Q é ${maiorValor} e sua posição é de index ${valores.indexOf(maiorValor)}`