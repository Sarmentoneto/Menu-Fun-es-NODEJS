
const input = require('../node_modules/readline-sync')


function calcularMedia(){


var nomeAluno = input.question('Digite o nome do aluno: ');
                
var nota1 = parseFloat(input.question('Digite a primeira nota: '));
var nota2 = parseFloat(input.question('Digite a segunda nota: '));
var nota3 = parseFloat(input.question('Digite a terceira nota: '));
var nota4 = parseFloat(input.question('Digite a quarta nota: '));

var media = ((nota1*1.5) + (nota2*1.5) + (nota3*3) + (nota4*4)) / (10);

if(media >= 7){
  console.log(`Parabens ${nomeAluno} Você foi aprovado com a media ${media.toFixed(2)}`);

}else if(media >= 5 && media < 7){

  console.log(`${nomeAluno} Você ficou em recuperaçâo com a media ${media.toFixed(2)}`);

}else{

    console.log(`Infelizmente Você ${nomeAluno} foi reprovado com a media ${media.toFixed(2)}`);} 

}

module.exports = calcularMedia;





/* media final de 10 pontos 
1 nota(1.5) 2 nota(1.5) 3 nota(3) 4 nota(4) / 10 */