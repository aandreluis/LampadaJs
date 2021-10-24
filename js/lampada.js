// criação das variaveis constantes, pegando os elementos do documento HTML pelo 'nome do id'
const turnOnOff = document.getElementById ('turnOnOff');
const lamp = document.getElementById ('lamp');

//verificar se a lâmpada está quebrada
function isLampDroken() {
    /*  
    indexOf procura strings dentro de uma string, se dentro do src tiver a palavra 'quebrada'.
    Se achar a palavra irá retornar um numero maior que -1. Se não, o número será igual a -1 
    ---> verdadeira: encontrou a palavra, retorna: > -1
    ---> falsa: não encontrou a palavra, retorna: = -1  
    */
    return lamp.src.indexOf ('quebrada') > -1; // retorna verdadeiro ou falso
}

//função para ligar
function lampOn () {
    //verificar se está quebrada
    if(!isLampDroken ()) {//se ñao tiver quebrada [! - negação]
        lamp.src = './img/ligada.jpg' //troca a refenceria da imagem
    }
}

//função para desligar
function lampOff () {
    //verificar se está quebrada
    if (!isLampDroken ()) { //se ñao tiver quebrada [! - negação]
        lamp.src = './img/desligada.jpg' //troca a refenceria da imagem
        //sempre que desligar volta para o botão ligar, mesmo que passe o mouse encima
        turnOnOff.textContent = 'Ligar';//muda o texto da tag para 'ligar'
        turnOnOff.className = 'btn btn-warning';//muda os nomes da classe
    }
}

//função para quebrar
function lampBroken () {
    lamp.src = './img/quebrada.jpg' //troca a refenceria da imagem
}

//função para ligar e desligar com um só botão
function lampOnOff () {
    if (turnOnOff.textContent == ('Ligar')) {//compara de o texto da tag é igual a 'ligar'
        lampOn();//chama a função
        turnOnOff.textContent = 'Desligar'; //muda o texto da tag para 'desligar'
        turnOnOff.className = 'btn btn-dark';//muda os nomes da classe
    } else {//se o texto da tag não ser igual a 'ligar'
        lampOff();//chama a função
        turnOnOff.textContent = 'Ligar';//muda o texto da tag para 'ligar'
        turnOnOff.className = 'btn btn-warning';//muda os nomes da classe
    }
}

//quando acontecer o evento 'nomeDoEventoJS', vai executar a função --> nomeDafunção.
turnOnOff.addEventListener ('click', lampOnOff); //quando clicar execute a função lampOnOff
lamp.addEventListener ('mouseover', lampOn); //quando o mouse passar por cima do elemento lampada, executa a função
lamp.addEventListener ('mouseleave', lampOff); //quando o mouse sair de cima do elemento lampada, executa a função
lamp.addEventListener ('dblclick', lampBroken); //quando clicar duas vezes executa a função