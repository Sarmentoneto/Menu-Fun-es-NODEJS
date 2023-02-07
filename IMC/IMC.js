const input = require('../node_modules/readline-sync')

function calcularIMC(){

var nomeUser = input.question('Digite o Seu Nome: ');
              
var peso = parseFloat(input.question('Digite seu Peso: '));
var altura = parseFloat(input.question('Digite a sua altura: '));


/*Peso/(altura * altura) 

kg/m2*/

var IMC = peso / (altura*altura);

  console.log(`${nomeUser} Seu IMC é: ${IMC.toFixed(2)}`);;
}
  module.exports = calcularIMC;


