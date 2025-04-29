let valores = [8,1,7,4,2,9]

console.log(valores)

/*for(var pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)// o primeiro placholder traz a posição e o segunto traz o valor (CONTEÚDO) daquela posição. Como há um laço de repetição (for) a posição está aumentando de uma em uma, logo o valor altera junto
}

for(let pos in valores){ // "para cada posição em valores o sistema mostrará o valores[pos]"
	console.log(valores[pos])
}*/

var pos = valores.indexOf(7)
console.log(pos)