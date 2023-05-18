//1115 MELHORADO
let resultado = document.getElementById('divResultado')

function quadrante(){
    let x = Number(document.getElementById('inpX').value)
    let y = Number(document.getElementById('inpY').value)

    if(x > 0 && y > 0){
        resultado.innerHTML = 'Está no primeiro quadrante!'
    }
    
    if(x < 0 && y > 0){
        resultado.innerHTML = 'Está no segundo quadrante!'
    }
    
    if(x < 0 && y < 0){
        resultado.innerHTML = 'Está no terceiro quadrante!'
    }
    
    if(x > 0 && y < 0){
        resultado.innerHTML = 'Está no quarto quadrante!'
    }
}    