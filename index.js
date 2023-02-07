const calcularIMC = require('./IMC/IMC.js')
const calcularMedia = require('./calcularmedia/calcularMedia')
const menuCalculadora = require('./calculadora/menuCalculadora')
const input = require('readline-sync')

do{
    var menu = parseInt(input.question(`Menu Principal:
    1 - Calcular a media do aluno
    2 - Calcular IMC
    3 - Calculadora:`
    ));    
           

switch(menu){
    case 1:
        calcularMedia(); break;
        

    case 2:
       calcularIMC(); break;  
   
    
    case 3:
      menuCalculadora(); break;    
       
          
 
         
      
}

var exit = input.question('Posso ajudar com mais alguma coisa? (0 = sim ou 1 = nao): ');



}while (exit < 1);