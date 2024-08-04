var valor = document.getElementById('num')
var res = document.getElementById('res')

if(valor % 2 == 0) {
    res.innerHTML += 'Número par!!!'
} else if(valor & 1 == 1) {
    res.innerHTML += 'Número ímpar!!'
} 