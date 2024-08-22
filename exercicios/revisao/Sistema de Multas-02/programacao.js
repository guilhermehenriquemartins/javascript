function entrou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#0099ff'
  botao.style.cursor = 'pointer'
  botao.style.transitionDuration = '.2s'
}

function saiu() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'black'
  botao.style.color = 'white'
  botao.style.transitionDuration = '.1s'
}

function clicou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'white'
  botao.style.color = 'black'
  botao.style.transitionDuration = '0s'
}

function moveu() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#0099ff'
  botao.style.color = 'white'
}

function verificar() {
  var txtvel = window.document.getElementById('ivel')
  var res = window.document.querySelector('div#res')
  var corpo = window.document.body
  var botao = window.document.getElementById('botao')

  if (txtvel.value.length == 0) {
    window.alert('O campo está vazio. Tente novamente.')
    res.innerHTML = ''
    corpo.style.backgroundColor = '#0099ff'
  } else {
    var vel = Number(txtvel.value)
    if (vel > 60) {
      res.innerHTML = '<p>Você será <strong>MULTADO</strong> por ultrapassar o limite máximo de 60Km/h</p>'
      res.style.textAlign = 'center'
      corpo.style.backgroundColor = 'darkred'
    } else {
      res.innerHTML = 'Você dirigiu dentro da velocidade esperada'
      res.style.textAlign = 'center'
      corpo.style.backgroundColor = 'darkgreen'
    }
    res.innerHTML += '<p>Use sempre o cinto de segurança</p>'
  }
}