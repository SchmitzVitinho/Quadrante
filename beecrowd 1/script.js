//1115

let x, y

x = Number(prompt('escreva o número da coordenada x: '))
y = Number(prompt('escreva o número da coordenada y: '))

if(x > 0 && y > 0){
    alert('primeiro quadrante!')
}

if(x < 0 && y > 0){
    alert('segundo quadrante!')
}

if(x < 0 && y < 0){
    alert('terceiro quadrante!')
}

if(x > 0 && y < 0){
    alert('quarto quadrante!')
}