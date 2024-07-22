var idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} 
else {
    console.log('Voto obrigatório')
}
/* Código "inteiro"
var idade = 15
if (idade < 16) {
    console.log(`Não vota`)
} else {
 if (idade >= 16 && idade < 18)
 console.log(`Voto opcional`)
    }
} */ 
