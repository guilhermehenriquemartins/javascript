function verificar() {
  var vel = window.document.getElementById('ivel')
  var res = window.document.getElementById('res')
  var corpo = window.document.body

  if (vel.value.length == 0) {
    window.alert('Por favor, digite um valor para a verificação')
  } else {
    var velocidade = Number(vel.value)
    res.style.display = 'block'
    res.innerHTML = `<p>Você dirigiu a <strong>${velocidade} Km/h</strong></p>`
    if (velocidade > 60) {
      res.innerHTML += '<p>Você será <strong>MULTADO</strong> por excesso de velocidade</p>'
      corpo.style.backgroundColor = 'darkred'
    } else {
      res.innerHTML += '<p>Parabéns! Você dirigiu dentro do que foi esperado, logo, não fez mais do que sua obrigação.</p>'
      corpo.style.backgroundColor = 'darkgreen'
    }
    res.innerHTML += '<p style="margin-top: 10px;"><strong>Dirija sempre com o cinto de segurança!</strong></p>'
  }
}






























function entrou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'dimgray'
  botao.style.color = 'black'
  botao.style.cursor = 'pointer'
}

function saiu() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'black'
  botao.style.color = 'white'
}

function clicou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'white'
  botao.style.color = 'black'
}