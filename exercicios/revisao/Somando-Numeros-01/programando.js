function somar() {
  var num1 = window.document.getElementById('in1')
  var num2 = window.document.getElementById('in2')
  var res = window.document.querySelector('div#res')

  if (num1.value.length == 0 || num2.value.length == 0) {
    window.alert('Digite um número no(s) campo(s) em branco para dar continuidade no seu processo!')
    res.innerHTML = 'Digite os números e veja aqui o resultado!'
  } else {
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    res.innerHTML = `${n1} + ${n2} = ${n1+n2}`
  }
}

function entrou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#005ca2'
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

function saiu() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'black'
}