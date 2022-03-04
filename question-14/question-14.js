/**
 * Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20 números, 
 * o algoritmo deve escrever esses 20 números lidos na ordem inversa. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
 var element = document.getElementById("textoResultado");

let valores = []
for (let index = 0;index < 20; index++) {
     let valor = parseInt(prompt(`Digite o ${index+1}º valor`))
     valores.push(valor)
}
// valores = [1, 2, 3]
let valoresInvertidos = []
for (let index2 = valores.length-1;index2 >=0; index2--) {
    valoresInvertidos.push(valores[index2])
}

element.innerHTML = valoresInvertidos