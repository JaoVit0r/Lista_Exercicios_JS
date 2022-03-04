/**
 *  Escreva um algoritmo que imprima a tabuada (de 1 a 10) para os números de 1 a 10. 
 */
var element = document.getElementById("textoResultado");

let fator1 = [1,2,3,4,5,6,7,8,9,10]
let fator2 = [1,2,3,4,5,6,7,8,9,10]

for (let value of fator1) {
    console.log(`Tabuada do ${value}`)
    for (let value2 of fator2) {
        console.log(`${value} x ${value2} = ${value*value2}`)
    }
}