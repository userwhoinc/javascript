 function contar() {
    var ini = document.getElementById('num1')
    var fim = document.getElementById('num2')
    var passos = document.getElementById('passos')
    var res = document.getElementById('resul')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0)  {
       res.innerHTML = ('Impossíver contar!') 
       // window.alert('[ERRO] Insira corretamente os dados!')
        
    } else {
        res.innerHTML = 'Contando... <br> '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        if (p <= 0) {
            window.alert('Passo inválido!')
            p = 1
        }
    if(i < f) {
       for (var c = i; c <= f; c += p) { 
        /* o Contador vai começar no Inicio, e enquanto o Contador for Menor ou Igual ao Fim, o Contador recebera ele mesmo + o Passo */
        res.innerHTML += ` ${c} \u{1F47E} `
        }
    } else {
        for(c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F47E}`
        }
    }
    res.innerHTML += `\u{1F973}` 
  }
}