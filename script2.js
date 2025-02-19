let nome = document.getElementById('nome'); //certo
let idade = document.getElementById('idade'); //certo
let cor = document.getElementById('cor'); //certo
let comida = document.getElementById('comida'); //certo
let apaixonado = document.getElementById('apaixonado'); //certo
let faculdade = document.getElementById('faculdade'); //certo
let calço = document.getElementById('calço'); //certo
let altura = document.getElementById('altura');//certo
let peso = document.getElementById('peso');//certo
let rebeca = document.getElementById('rebeca');//certo
let bunda = document.getElementById('bunda'); //certo
let filhos = document.getElementById('filhos');

let enviar = document.getElementById('enviar');
let pontos = 0;

function resetarPontuação(){
    pontos = 0;
}

function calcularPontuacao() {
    pontuacao.textContent = pontos + ' pontos!'
}


enviar.addEventListener('click' ,function(){
    if(nome.value != 'Gabriel Alcântara de Oliveira' && nome.value != 'gabriel alcântara de oliveira'){ //NOME
        window.alert('Nome errado!')
        nome.style.backgroundColor = 'red'
    } else {
            nome.style.backgroundColor ='green'
            pontos += 8
            calcularPontuacao()
        }
})
enviar.addEventListener('click', function(){ 
    if (idade.value != '21'){ //IDADE
        window.alert('Idade errada!')
        idade.style.backgroundColor = 'red'
    } else {
        idade.style.backgroundColor ='green'
        pontos += 8
        calcularPontuacao()
    }
})
enviar.addEventListener('click',function(){
    if (cor.value != 'Verde' && cor.value != 'verde'){ //COR
        window.alert('Cor errada!')
        cor.style.backgroundColor = 'red'
    } else {
        cor.style.backgroundColor ='green'
        pontos += 8
        calcularPontuacao()
    }
})
enviar.addEventListener('click',function(){
    if (comida.value != 'Chocolate' && comida.value != 'chocolate' ){ //COMIDA
        window.alert('Comida errada!')
        comida.style.backgroundColor = 'red'
    } else {
        comida.style.backgroundColor = 'green'
        pontos += 8
        calcularPontuacao()
    }
})
enviar.addEventListener('click', function(){
    if (apaixonado.value != 'Videogames' && apaixonado.value != 'videogames' && apaixonado.value != 'Video Games' && apaixonado.value != 'video games'){ //APAIXONADO
        window.alert('Não é isso que eu amo desde pequeno!')
        apaixonado.style.backgroundColor = 'red'
    } else {
        apaixonado.style.backgroundColor ='green'
        pontos += 8
        calcularPontuacao()
    }        
})
enviar.addEventListener('click', function(){
    if (faculdade.value != 'Engenharia de Software'){ //FACULDADE
        window.alert('Não é isso que eu estudo!')
        faculdade.style.backgroundColor = 'red'
    } else {
        faculdade.style.backgroundColor ='green'
        pontos += 8
        calcularPontuacao()
    }    
})
enviar.addEventListener('click', function(){
    if (calço.value != 40){ //CALÇO
        window.alert('Tamanho errado!')
        calço.style.backgroundColor = 'red'
    } else {
        calço.style.backgroundColor ='green'
        pontos += 8
        calcularPontuacao()
    }
})
enviar.addEventListener('click',function(){
    if (altura.value != '1,76' && altura.value != '1.76'  && altura.value != '1,76m'  && altura.value != '1.76m'){ //ALTURA
        window.alert('Altura errada!')
        altura.style.backgroundColor = 'red'
    } else{
        altura.style.backgroundColor ='green'
        pontos += 8
        calcularPontuacao()
    }
})
enviar.addEventListener('click', function(){
    if (peso.value != '70kg' && peso.value != '70KG'){ //PESO   
        window.alert('Peso errado!')
        peso.style.backgroundColor = 'red'
    } else {
        peso.style.backgroundColor ='green'
        pontos += 8
        calcularPontuacao()
    }
})
enviar.addEventListener('click', function(){
    if (rebeca.value != 'Rebeca' && rebeca.value != 'rebeca'){ //REBECA
        window.alert('Não estou apaixonado por isso!')
        rebeca.style.backgroundColor = 'red'
    } else {
        rebeca.style.backgroundColor ='green'
        pontos += 1000
        calcularPontuacao()
    }
})
enviar.addEventListener('click', function(){
    if (bunda.value != 'Bunda' && bunda.value != 'bunda'){ //BUNDA
        window.alert('Não estou apaixonado por isso!')
        bunda.style.backgroundColor = 'red'
} else {
    bunda.style.backgroundColor ='green'
    pontos += 12
    calcularPontuacao()
}
})
enviar.addEventListener('click', function(){
    if (filhos.value != 2){ //FILHOS
        window.alert('Quantidade de filhos errada!')
        filhos.style.backgroundColor = 'red'
    } else {
        filhos.style.backgroundColor ='green'
        pontos += 8
        calcularPontuacao()
    }
})




let resultado = document.getElementById('resultado')
let pontuacao = document.createElement('p')
pontuacao.textContent = pontos + ' pontos!'
resultado.appendChild(pontuacao)


enviar.addEventListener('click', function(){
    if (pontos < 100){
        resetarPontuação()
    } else {
    }
})

enviar.addEventListener('mouseenter', function(){
    enviar.style.backgroundColor = 'purple'});
enviar.addEventListener('mouseout', function(){
    enviar.style.backgroundColor = 'pink'});


let btnvoltar = document.getElementById('btnvoltar')
btnvoltar.addEventListener('click', function(){
    window.location.href = 'index.html';
})

let btnavancar = document.getElementById('btnavancar')
btnavancar.addEventListener('click', function(){
    if (pontos < 100){
        window.alert('Você não atingiu a pontuação mínima para avançar!')
    }
})



