/*var agora = new Date()
var hora = agora.getHours()*/
function carregar() {
  var hora = 18
  var res = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  res.innerHTML = `Agora são ${hora} horas`

  if (hora < 12) {
    img.src = 'morning.png'
    window.document.body.style.backgroundColor =  'lightskyblue'
  } else if (hora < 18) {
    img.src = 'afternoon.png'
    window.document.body.style.backgroundColor = '#c77352'
  } else {
    img.src = 'night.png'
    window.document.body.style.backgroundColor = '#1d1d1d'
  }
}
