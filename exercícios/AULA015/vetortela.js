let valores = [0, 1, 3, 6, 8, 9, 0]

/* for(let pos= 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

for(let pos in valores) { /* para cada posição dentro em 'valores', mostro abaixo. Apenas em array */ 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// para buscar valores
valores.indexOf(6) 