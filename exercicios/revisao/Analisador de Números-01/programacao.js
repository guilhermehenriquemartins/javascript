var botao1 = window.document.getElementById('botao1')
var botao2 = window.document.getElementById('botao2')

function entrou1() {
  botao1.style.backgroundColor = '#0091ff'
  botao1.style.cursor = 'pointer'
  botao1.style.transitionDuration = '.3s'
}

function saiu1() {
  botao1.style.backgroundColor = 'black'
  botao1.style.color = 'white'
  botao1.style.transitionDuration = '.2s'
}

function clicou1() {
  botao1.style.backgroundColor = 'white'
  botao1.style.color = 'black'
  botao1.style.transitionDuration = '0s'
}

function moveu1() {
  botao1.style.backgroundColor = '#0091ff'
  botao1.style.color = 'white'
  botao1.style.transitionDuration = '.1s'
}

function entrou2() {
  botao2.style.backgroundColor = '#0091ff'
  botao2.style.color = 'white'
  botao2.style.cursor = 'pointer'
  botao2.style.transitionDuration = '.3s'
}

function saiu2() {
  botao2.style.backgroundColor = 'black'
  botao2.style.color = 'white'
  botao2.style.transitionDuration = '.2s'
}

function clicou2() {
  botao2.style.backgroundColor = 'white'
  botao2.style.color = 'black'
  botao2.style.transitionDuration = '0s'
}

function moveu2() {
  botao2.style.backgroundColor = '#0091ff'
  botao2.style.color = 'white'
  botao2.style.transitionDuration = '.1s'
}

var num = window.document.getElementById('inum')
var tabela = window.document.getElementById('itxtab')
var res = window.document.getElementById('res')
var lista = []

function isNumero(n1) {
  if (Number(n1) >= 1 && Number(n1) <= 100) {
    return true
  } else {
    return false
  }
}

function iLista(x, y) {
  if (x.indexOf(Number(y)) == -1) {
    return true
  } else {
    return false
  }
}

function maior(li) {
  var num = 0
  for (var c = 0; c <= li.length; c++) {
    if (li[c] > num) {
      num = li[c]
    }
  }
  return num
}

function menor(i) {
  var n1 = i[0]
  for (var c = 0; c <= i.length; c++) {
    if (i[c] < n1) {
      n1 = i[c]
    }
  }
  return n1
}

function soma(lista) {
  var resultado = 0
  for (c in lista) {
    resultado += lista[c]
  }
  return resultado
}

function media(lista) {
  var tudo = 0
  var media = 0
  for (c in lista) {
    tudo += lista[c]
  }
  return media = tudo / lista.length
}

function adicionar() {
  if (isNumero(num.value) && iLista(lista, num.value)) {
    res.innerHTML = ''
    lista.push(Number(num.value))
    var item = window.document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    item.value = `n${num.value}`
    tabela.appendChild(item)
  } else {
    window.alert('Valor inválido ou já encontrado na lista')
  }
}

function finalizar() {
  if (lista.length == 0 ) {
    window.alert('Não há valor inserido, tente novamente.')
  } else {
    res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior(lista)}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor(lista)}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma(lista)}</p>`
    res.innerHTML += `A média dos valores digitados é ${media(lista)}`
  }
}
