let num = [5, 8, 2, 9, 3]

num.sort() //por conta desse método, o vetor num se mostra em ordem crescente na linha seguinte
num.push(1) // o 1 foi acrescentado, por meio do push, após o vetor ter sido colocado em ordam, logo o 1 aparecerá no final. Caso deseje que apareça na primeira opção, será necessário usar o num[0] = 1 ou colocar a linha de código antes de 'sort
console.log(num) // mostra o vetor
console.log(`Nosso vetor é o ${num.length}`) // mostra o comprimento do vetor
console.log(num[1]) // mostra o elemento da posição 1, que no caso é o 3