function carregar() {
  var agora = new Date()
  var hora = agora.getHours()
  var minuto = agora.getMinutes()
  var msg = window.document.getElementById('msg')
  var img = window.document.querySelector('img#imagem')
  if (hora > 1) {
    msg.innerHTML = `Agora são <span style='background-color: black; color: white; padding: 2px 5px;'>${hora}:${minuto}</span>`
  } else {
    msg.innerHTML = `Agora é <span style="background-color: black; color: white; padding: 2px 5px;">${hora}:${minuto}</span>`
  }
  

  if (hora < 12) {
    img.src = 'img/morning.png'
    window.document.body.style.backgroundColor = 'lightskyblue'
  } else if (hora < 18) {
    img.src = 'img/afternoon.png'
    window.document.body.style.backgroundColor = '#c16a4d'
  } else {
    img.src = 'img/night.png'
    window.document.body.style.backgroundColor = '#313131'
  }
}