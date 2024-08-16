function carregar(){
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()
  var informacao = window.document.getElementById('hora')
  var res = window.document.getElementById('res')
  var titulo = window.document.getElementsByTagName('h1')[0]
  var rodape = window.document.getElementsByTagName('footer')[0]
  var corpo = window.document.body
  var img = window.document.createElement('img')

  res.innerHTML = `<p>Agora são <span style="background-color: black; color: white; padding: 1px 5px;">${hora}:${minuto}</span></p>`
  res.style.textAlign = 'center'

  if (hora < 12) {
    corpo.style.backgroundColor = 'lightskyblue'
    titulo.style.color = 'white'
    rodape.style.color = 'white'
    img.setAttribute('src','morning.png')
    img.style.width = '250px'
    img.style.marginTop = '20px'
    res.appendChild(img)
  } else if (hora < 18) {
    corpo.style.backgroundColor = 'lightsalmon'
    titulo.style.color = 'white'
    rodape.style.color = 'white'
    img.setAttribute('src','afternoon.png')
    img.style.width = '250px'
    img.style.marginTop = '20px'
    res.appendChild(img)
  } else if (hora >= 18) {
    corpo.style.backgroundColor = 'darkslategray'
    titulo.style.color = 'white'
    rodape.style.color = 'white'
    img.setAttribute('src','night.png')
    img.style.width = '250px'
    img.style.marginTop = '20px'
    res.appendChild(img)
  }
}