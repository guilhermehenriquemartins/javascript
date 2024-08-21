function entrou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#006db6'
  botao.style.cursor = 'pointer'
  botao.style.transitionDuration = '.3s'
}

function saiu() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'black'
  botao.style.color = 'white'
}

function clicou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#0099ff'
  botao.style.transitionDuration = '0s'
}

function mover() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#006db6'
}

function tabuada() {
  var txtn = window.document.getElementById('txtn')
  var res = window.document.getElementById('itxtab')

  if (txtn.value.length == 0) {
    window.alert('Valor Inválido! Verifique o campo e tente novamente')
    res.innerHTML = ''
  } else {
    var numero = Number(txtn.value)
    res.innerHTML = ''
    for (var c = 0; c <= 10; c++) {
      var item = window.document.createElement('option')
      item.text = `${numero} x ${c} = ${numero*c}`
      item.value = `tab${c}`
      res.appendChild(item)
    }
  }
}