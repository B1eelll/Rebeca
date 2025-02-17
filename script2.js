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

let enviar = document.getElementById('enviar')
let pontos = 0;

enviar.addEventListener('click' ,function(){
    if(nome.value != 'Gabriel Alcântara de Oliveira' && nome.value != 'gabriel alcântara de oliveira'){ //NOME
        window.alert('Nome errado!')
    } else {
            nome.style.backgroundColor ='green'}
            pontos =+1
})
enviar.addEventListener('click', function(){ 
    if (idade.value != '21'){ //IDADE
        window.alert('Idade errada!')
    } else {
        idade.style.backgroundColor ='green'
        pontos =+1
    }
})
enviar.addEventListener('click',function(){
    if (cor.value != 'Verde' && cor.value != 'verde'){ //COR
        window.alert('Cor errada!')
    } else {
        cor.style.backgroundColor ='green'
        pontos =+1
    }
})
enviar.addEventListener('click',function(){
    if (comida.value != 'Chocolate' && comida.value != 'chocolate' ){ //COMIDA
        window.alert('Comida errada!')
    } else {
        comida.style.backgroundColor = 'green'
        pontos =+1
    }
})
enviar.addEventListener('click', function(){
    if (apaixonado.value != 'Videogames' && apaixonado.value != 'videogames' && apaixonado.value != 'Video Games' && apaixonado.value != 'video games'){ //APAIXONADO
        window.alert('Não é isso que eu amo desde pequeno!')
    } else {
        apaixonado.style.backgroundColor ='green'
        pontos =+1
    }        
})
enviar.addEventListener('click', function(){
    if (faculdade.value != 'Engenharia de Software'){ //FACULDADE
        window.alert('Não é isso que eu estudo!')
    } else {
        faculdade.style.backgroundColor ='green'
        pontos =+1
    }    
})
enviar.addEventListener('click', function(){
    if (calço.value != 40){ //CALÇO
        window.alert('Tamanho errado!')
    } else {
        calço.style.backgroundColor ='green'
    }
})
enviar.addEventListener('click',function(){
    if (altura.value != '1,76' && altura.value != '1.76'  && altura.value != '1,76m'  && altura.value != '1.76m'){ //ALTURA
        window.alert('Altura errada!')
    } else{
        altura.style.backgroundColor ='green'
        pontos =+1
    }
})
enviar.addEventListener('click', function(){
    if (peso.value != '70kg' && peso.value != '70KG'){ //PESO   
        window.alert('Peso errado!')
    } else {
        peso.style.backgroundColor ='green'
        pontos =+1
    }
})
enviar.addEventListener('click', function(){
    if (rebeca.value != 'Rebeca' && rebeca.value != 'rebeca'){ //REBECA
        window.alert('Não estou apaixonado por isso!')
    } else {
        rebeca.style.backgroundColor ='green'
        pontos =+1
    }
})
enviar.addEventListener('click', function(){
    if (bunda.value != 'Bunda' && bunda.value != 'bunda'){ //BUNDA
        window.alert('Não estou apaixonado por isso!')
} else {
    bunda.style.backgroundColor ='green'
    pontos =+1
}
})
enviar.addEventListener('click', function(){
    if (filhos.value != 2){
        window.alert('Quantidade de filhos errada!')
    } else {
        filhos.style.backgroundColor ='green'
        pontos =+1
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



