function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')  
    if (fano.value.length == 0 || Number(fano.value) > ano) {  
        // caixa vazia         ou     acima do ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('fsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
    }
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'criança-m.jpg') 
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        } if (idade >= 0 && idade < 13) {
            img.setAttribute('src', 'criança-f.jpg')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem-f.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'adulto-f.jpg')
        } else {
            img.setAttribute('src', 'idoso-f.jpg')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
