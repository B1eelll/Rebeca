let tapete = document.getElementById('tapete')
let panela = document.getElementById('panela')
let quadro = document.getElementById('quadro')

let btn1 = document.getElementById('check1')
let btn2 = document.getElementById('check2')
let btn3 = document.getElementById('check3')

btn1.addEventListener('click', function(){
    if (tapete.value === 'tapete'){
        window.alert('Boa, Se eu fosse você, olharia debaixo dele.')  
        enigma1.style.border = '2px solid green'
    } else {
        window.alert('Hum... Acho que não é isso.')
    }
})

btn2.addEventListener('click',function(){
    if (panela.value === 'panela'){
        window.alert('Tem uma surpresinha dentro dela!')
        enigma2.style.border = '2px solid green'
    } else {
        window.alert('Não é isso...')
    }
})

btn3.addEventListener('click',function(){
    if (quadro.value === 'quadro'){
        window.alert('Olha pra direita =>')
        enigma3.style.border = '2px solid green'
    } else {
        window.alert('Acho que está errado.')
    }
})