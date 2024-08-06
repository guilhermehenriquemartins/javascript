var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()
console.log(`Agora são extamente ${hora}hrs, ${minuto} minuto(s) e ${segundo} segundos`)
if (hora < 12) {
  console.log('Bom Dia!')
} else if (hora < 18) {
  console.log('Boa Tarde!')
} else {
  console.log('Boa Noite!')
}