var agora = new Date() //horas atuais
var hora = agora.getHours()  // adicionando horario atual
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6) {
    console.log('Boa madruga, parceiro!')
} else if (hora < 12) {
    console.log(`Bom dia, flor!`)
} else if (hora <= 18) {
    console.log('Boa tarde, bem!')
} else {
    console.log('Boa noite, visitante!')
}