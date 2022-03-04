/**
 * Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
 *  
 * Obs: Utilize a interface html para receber os dados do usuário
 */

let valor = parseInt(prompt("Digite um valor"))

 var element = document.getElementById("textoResultado");
 if (valor > 0) {
    element.innerHTML = "Positivo"
 }else {
    element.innerHTML = "Negativo"
 }
 