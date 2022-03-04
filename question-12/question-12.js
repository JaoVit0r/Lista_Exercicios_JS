/**
 * Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em um vetor. 
 * Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, 
 * se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
var element = document.getElementById("textoResultado");

let nomes = []
for (let index = 0;index < 10; index++) {
    let nome = prompt(`Digite o ${index+1}º nome`)
    nomes.push(nome)
}
let nomeBuscado = prompt("Qual nome quer buscar?")
for (let value of nomes) {
    if (value === nomeBuscado) {
        element.innerHTML = "ACHEI"
        break
    }else {
        element.innerHTML = "NÃO ACHEI"
    }
}

