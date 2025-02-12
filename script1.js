let casalBebendo = document.getElementById('casalbebendo')
let casalAbraco = document.getElementById('casalabraco')
let rebeijinho = document.getElementById('rebeijinho')
let proxp = document.getElementById('proxp')
let comida = document.getElementById('comidapreferida')
let btnsenha = document.getElementById('btnsenha')

//EVENTOS DE IMAGENS:
    casalBebendo.addEventListener('click',function(){            
        window.alert("Você nem se lembrava dessa foto, né?")})     
    
    casalAbraco.addEventListener('click',function(){
        window.alert("Abraço gostooooooooooooooso!")})
    
    rebeijinho.addEventListener('click',function(){
        window.alert("😘😘😘😘😘😘😘😘😘😘")})

    comida.addEventListener('click', function(){
        window.alert("Achou mesmo que eu iria esquecer de: Batatinha, Feijão, Açaí, Pipoca, Limonada e Peixe frito?")
    })
    //

        
//EVENTOS DE BOTÕES
    proxp.addEventListener('mouseenter' ,function(){
        proxp.style.backgroundColor ='pink'})

    proxp.addEventListener('mouseleave',function(){
        proxp.style.backgroundColor = 'white'})
        
    proxp.addEventListener('click',function(){
        window.open('index2.html');
    });
    btnsenha.addEventListener('mouseenter', function(   ){
        btnsenha.style.backgroundColor = 'gray'});
    btnsenha.addEventListener('mouseleave' , function(){
        btnsenha.style.backgroundColor = 'white'});
// 

    btnsenha.addEventListener('click', function senha(){
        let senha = window.prompt('Digite a senha super secreta:')
        if (senha != 220479){
            window.alert("Senha incorreta, Presta atenção Cabeçuda.")
        } else {
            window.location.href = 'segredo.html';
        }
    })

window.alert('Fiz esse site Horroroso com todo o carinho pra você, espero que goste! ❤️')

