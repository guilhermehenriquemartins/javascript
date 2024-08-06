var agora = new Date()
var semana = agora.getDay()
var dia =  ''

switch(semana) {
  case 0:
    dia = 'Domingo'
    break    
  case 1:
    dia = 'Segunda-Feira'
    break
  case 2:
    dia = 'Terça-Feira'
    break
  case 3:
    dia = 'Quarta-Feira'
    break
  case 4:
    dia = 'Quinta-Feira'
    break
  case 5:
    dia = 'Sexta-Feira'
    break
  case 6:
    dia = 'Sábado'
    break
}

console.log(`Hoje é ${dia}!`)