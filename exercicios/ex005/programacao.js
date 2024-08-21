function entrou() {
  var botao = window.document.getElementById('botao1')
  botao.style.backgroundColor = '#00aaff'
  botao.style.transitionDuration = '.2s'
  botao.style.cursor = 'pointer'
}

function saiu() {
  var botao = window.document.getElementById('botao1')
  botao.style.backgroundColor = 'black'
  botao.style.color = 'white'
}

function clicou() {
  var botao = window.document.getElementById('botao1')
  botao.style.backgroundColor = 'white'
  botao.style.color = 'black'
  botao.style.transitionDuration = '0s'
}

function moveu() {
  var botao = window.document.getElementById('botao1')
  botao.style.backgroundColor = '#00aaff'
  botao.style.color = 'white'
}