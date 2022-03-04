/**
 * Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

let valor = parseInt(prompt("Digite um valor"))


 var element = document.getElementById("textoResultado");
 if (valor > 10) {
    element.innerHTML = "É MAIOR QUE 10!"
}else {
    element.innerHTML = "NÃO É MAIOR QUE 10!"
}
 