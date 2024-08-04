function contar() {
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' // apaga e recomeça o conteudo
        while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }        
       
}