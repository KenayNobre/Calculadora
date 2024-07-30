// VARIAVEIS
var zero = window.document.getElementById('zero')
var um = window.document.getElementById('1')
var dois = window.document.getElementById('2')
var tres = window.document.getElementById('3')
var quatro = window.document.getElementById('4')
var cinco = window.document.getElementById('5')
var seis = window.document.getElementById('6')
var sete = window.document.getElementById('7')
var oito = window.document.getElementById('8')
var nove = window.document.getElementById('9')
var mais = window.document.getElementById('+')
var menos = window.document.getElementById('-')
var igual = window.document.getElementById('=')
var C = window.document.getElementById('C')
var multi = window.document.getElementById('*')
var divisao = window.document.getElementById('/')

var res = window.document.getElementById('res')

//MUDANÇA DE COR DOS NUMEROS
function entrou1(){
   um.style.background = 'gray'
}
function entrou2(){
    dois.style.background = 'gray'
}
function entrou3(){
    tres.style.background = 'gray'
}
function entrou4(){
    quatro.style.background = 'gray'
}
function entrou5(){
    cinco.style.background = 'gray'
}
function entrou6(){
    seis.style.background = 'gray'
}
function entrou7(){
    sete.style.background = 'gray'
}
function entrou8(){
    oito.style.background = 'gray'
}
function entrou9(){
    nove.style.background = 'gray'
}
function entrou0(){
    zero.style.background = 'gray'
}
 

function saiu1(){
    um.style.background = 'orange'
}
function saiu2(){
     dois.style.background = 'orange'
}
function saiu3(){
     tres.style.background = 'orange'
}
 function saiu4(){
     quatro.style.background = 'orange'
}
function saiu5(){
     cinco.style.background = 'orange'
}
function saiu6(){
     seis.style.background = 'orange'
}
function saiu7(){
     sete.style.background = 'orange'
}
function saiu8(){
     oito.style.background = 'orange'
}
function saiu9(){
     nove.style.background = 'orange'
}
function saiu0(){
     zero.style.background = 'orange'
}

// MUDANÇA DE COR DOS SINAIS
function entroumais(){
    mais.style.background = 'gray'
}
function saiumais(){
    mais.style.background = 'orange'
}
function entroumenos(){
    menos.style.background = 'gray'
}
function saiumenos(){
    menos.style.background = 'orange'
}
function entrouigual(){
    igual.style.background = 'gray'
}
  function saiuigual(){
    igual.style.background = 'orange'
}
  function entroulimpar(){
    C.style.background = 'gray'
}
function saiulimpar(){
    C.style.background = 'orange'
}
function entroumulti(){
    multi.style.background = 'grey'
}
function saiumulti(){
    multi.style.background = 'orange'
}
function entroudivisao(){
    divisao.style.background = 'grey'
}
function saiudivisao(){
    divisao.style.background = 'orange'
}
  



//INTERAÇÃO
function zer(){
    res.innerText += 0
}
function um1(){
    res.innerText += 1
}
function dois2(){
    res.innerText += 2
}
function tres3(){
    res.innerText += 3
}
function quatro4(){
    res.innerText += 4
}
function cinco5(){
    res.innerText += 5
}
function seis6(){
    res.innerText += 6
}
function sete7(){
    res.innerText += 7
}
function oito8(){
    res.innerText += 8
}
function nove9(){
    res.innerText += 9
}

function maiss(){
    res.innerText += '+'

}
function menoss(){
    res.innerText += '-'
}

function multiplicacao(){
  res.innerText += '*'
}
function divi(){
  res.innerText += '/'
}

function igualdade() {
    // Avalia a expressão e exibe o resultado
     res.innerText = eval(res.innerText);  //Eval analisa a expressao escrita e realiza a conta    
}

function limpar() {
    // Limpa o display
    res.innerText = '';
}

  