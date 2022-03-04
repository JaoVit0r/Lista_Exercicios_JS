/**
 * Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
 var element = document.getElementById("textoResultado");


let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor (diferente do primeiro): "))
switch (valor1) {
    case valor2:
        valor2 = parseInt(prompt("Digite um valor diferente do primeiro: "))
        break;

    default:
        break;
}
if (valor1 > valor2) {
    element.innerHTML = `O maior valor é ${valor1}`
}else if (valor2 > valor1) {
    element.innerHTML = `O maior valor é ${valor2}`
}


