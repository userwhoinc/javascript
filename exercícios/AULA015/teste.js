let num = [3, 6, 7, 2, 0]
/* 
  num[5] = 1 // posição e número recebido
  num.push(8) // adiciona na proxima posição
  num.length 
*/
num.sort() // coloca em ordem crescente 

// a ordem importa!

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do array é ${num[0]}`)

let pos = num.indexOf(4)
if(pos == -1) {
  console.log(`O valor não foi encontrado`)
} else {
console.log(`O valor 3 está na posição ${pos}`)
}
//-1 significa "não encontrado"