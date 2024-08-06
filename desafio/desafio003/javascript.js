function conferir() {
var n = document.getElementById('num')
var res = document.getElementById('res')

res.innerHTML = ''
if(n%2 == 0) {
    res.innerHTML = ('Número par!!')
} else {
    res.innerHTML = ('Número ímpar!!')
} 
}

