/**
 * A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, 
 * cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, 
 * o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
 * (considere que o mês possua 4 semanas exatas).   
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

var element = document.getElementById("textoResultado");

let horasTrabalhadas = parseInt(prompt("Digite as horas trabalhadas"))
let salarioPorHora = parseInt(prompt("Digite o salário por hora"))

if (horasTrabalhadas > 160) {
    salarioExtraPorHora = 1.5*salarioPorHora
    element.innerHTML = `O salário mensal do funcionário é R$ ${160*salarioPorHora + (horasTrabalhadas-160)*salarioExtraPorHora} `
}else {
    element.innerHTML = `O salário mensal do funcionário é R$ ${160*salarioPorHora}`
}

/*1 mês -- 4 semanas
1 semana -- 40 horas
*/ 

 
 