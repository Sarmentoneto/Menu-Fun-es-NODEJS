const OperacoesAritimeticas = require('./OperacoesAritimeticas')
const input = require('../node_modules/readline-sync')


function menuCalculadora(){
    
    var opcao = Number(input.question(`Escolha a opção desejada
    1 - adicao
    2 - subtraco
    3 - multiplicacao
    4 - divisao
    `))
var num1 = Number(input.question("Digite o primeiro numero:"))
var num2 = Number(input.question("Digite o segundo numero:"))


switch(opcao) {
    case 1: console.log(OperacoesAritimeticas.somar(num1, num2)); break;

    case 2: console.log(OperacoesAritimeticas.subtrair(num1, num2)); break;

    case 3: console.log(OperacoesAritimeticas.multiplicar(num1, num2)); break;

    case 4: console.log(OperacoesAritimeticas.dividir(num1, num2)); break;
    
    default: console.log("Opção	invalida!")
}}

module.exports = menuCalculadora;