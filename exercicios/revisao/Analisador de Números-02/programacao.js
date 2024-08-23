var num = window.document.getElementById('txtn1')
var botao1 = window.document.getElementById('botao1')
var selecao = window.document.querySelector('select#itabela')
var botao2 = window.document.getElementById('botao2')
var botao3 = window.document.getElementById('botao3')
var res = window.document.querySelector('div#res')
var lista = []

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
  botao1.style.transitionDuration = '.1s'
}

function moveu1() {
  botao1.style.backgroundColor = '#0091ff'
  botao1.style.color = 'white'
}

function entrou2() {
  botao2.style.backgroundColor = '#0091ff'
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
  botao2.style.transitionDuration = '.1s'
}

function moveu2() {
  botao2.style.backgroundColor = '#0091ff'
  botao2.style.color = 'white'
}

function entrou3() {
  botao3.style.backgroundColor = 'red'
  botao3.style.cursor = 'pointer'
  botao3.style.transitionDuration = '.3s'
}

function saiu3() {
  botao3.style.backgroundColor = 'darkred'
  botao3.style.color = 'white'
  botao3.style.transitionDuration = '.2s'
}

function clicou3() {
  botao3.style.backgroundColor = 'white'
  botao3.style.color = 'darkred'
  botao3.style.transitionDuration = '.1s'
}

function moveu3() {
  botao3.style.backgroundColor = 'red'
  botao3.style.color = 'white'
}

function éNumero(numero) {
  if (Number(numero) >= 1 && Number(numero) <= 100) {
    return true
  } else {
    return false
  }
}

function naLista(numero, lista) {
  if (lista.indexOf(Number(numero)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (éNumero(num.value) && !naLista(num.value, lista)) {
    res.innerHTML = ''
    lista.push(Number(num.value))
    var item = window.document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    item.value = `n${num.value}`
    selecao.appendChild(item)
  } else {
    window.alert('Valor Inválido ou inserido. Tente novamente.')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (lista.length == 0) {
    window.alert('Insira antes um número para poder finalizar')
  } else {
    var maior = lista[0]
    var menor = lista[0]
    var soma = 0
    var media = 0
    for (c in lista) {
      soma += lista[c]
      if (lista[c] > maior) {
        maior = lista[c]
      } else if (lista[c] < menor) {
        menor = lista[c]
      }
      media = soma / lista.length
    }
    res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `A média dos valores digitados é ${media}`
  }
}

function limpar() {
  res.innerHTML = ''
  selecao.innerHTML = ''
  lista = []
}