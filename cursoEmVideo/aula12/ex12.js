var agora = new Date() //variável que recebe a data do sistema (dia, mês, ano, hora,..)
var hora = agora.getHours() //variável que rebece apenas a hora do sistema (agora.getHours())
console.log(`Agora são exatamente ${hora} horas`)
if (hora<12){
    console.log('Bom dia!')
} else if (hora <=18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}