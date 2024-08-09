var num = document.querySelector('input#num')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
var valores = []

function ehNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(ehNum(num.value) && !inLista(num.value, valores)) {
    window.alert('joiia')
    } else {
        window.alert ('[ERRO} Número inválido ou ja dentro da lista, faça novamente')
    }
} 