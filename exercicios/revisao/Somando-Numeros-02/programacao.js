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

function somar() {
  var txtn1 = window.document.getElementById('itxtn1')
  var txtn2 = window.document.getElementById('itxtn2')
  var res = window.document.querySelector('div#res')

  if (txtn1.value.length == 0 || txtn2.value.length == 0) {
    window.alert('Um dos campos não foram preenchidos. Tente novamente.')
    res.innerHTML = ''
  } else {
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    res.innerHTML = `<p>A soma de <span style="background-color: black; color: white; padding: 2px 7px; border-radius: 5px;">${n1} + ${n2} = ${n1+n2}</span></p>`
  }
}