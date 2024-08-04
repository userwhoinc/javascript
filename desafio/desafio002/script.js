function enviar() {
    var name = document.getElementById('nome')
    var idade = document.querySelector('input#num')
    var salario = document.getElementById('sal')
    var sex = document.getElementsByName('sex')
    var civil = document.getElementsByName('estado')
    var msg = document.getElementById('msg')
    
    if(name.value.length == 0 || idade.value.length == 0 || salario.value.length == 0 ) {
        window.alert('[ERRO] Responda corretamente!')
    } else {
        msg.innerHTML = `Muito obrigado, ${name} pelos dados! faremos o possível`
    }
}