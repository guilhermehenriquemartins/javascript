function entrou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'gray'
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

function desclicou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'black'
  botao.style.color = 'white'
}

function dentro() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'gray'
  botao.style.color = 'black'
}

function verificar() {
  var nacionalidade = window.document.getElementById('inac')
  var res = window.document.getElementById('res')

  if (nacionalidade.value.length == 0) {
    window.alert('Selecione a sua nacionalidade')
  } else {
    res.style.display = 'block'
    if ()
  }
}