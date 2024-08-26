var botao1 = window.document.getElementById('botao1')
var botao2 = window.document.getElementById('botao2')
var botao3 = window.document.getElementById('botao3')

function entrou1() {
  botao1.style.backgroundColor = '#0099ff'
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
  botao1.style.backgroundColor = '#0099ff'
  botao1.style.color = 'white'
}

function entrou2() {
  botao2.style.backgroundColor = '#0099ff'
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
  botao2.style.backgroundColor = '#0099ff'
  botao2.style.color = 'white'
}

var txtn = window.document.getElementById('txtinum')
var res = window.document.querySelector('div#res')
var selecao = window.document.getElementById('txitab')
var tabela = []

function isNumber(txtn) {
  if (Number(txtn.value) >= 1 && Number(txtn.value) <= 100) {
    return true
  } else {
    return false
  }
}

function iLista(tabela, txtn) {
  if (tabela.indexOf(Number(txtn.value)) == -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumber(txtn) && iLista(tabela, txtn)) {
    res.innerHTML = ''
    tabela.push(Number(txtn.value))
    var item = window.document.createElement('option')
    item.text = `Valor ${txtn.value} adicionado`
    item.value = `n${txtn.value}`
    selecao.appendChild(item)
  } else {
    window.alert('Valor Inválido ou já informado. Tente novamente.')
  }
  txtn.value = ''
  txtn.focus()
}

function finalizar() {
  if (tabela.length == 0) {
    window.alert('O campo está vazio. Tente novamente.')
  } else {
    var tot = tabela.length
    var maior = tabela[0]
    var menor = tabela[0]
    var soma = 0
    for (c in tabela) {
      soma += tabela[c]
      if (tabela[c] > maior) {
        maior = tabela[c]
      } else if (tabela[c] < menor) {
        menor = tabela[c]
      }
    }
    var media = soma / tot
    res.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `A média dos valores digitados é ${media}`
  }
}

function limpar() {
  selecao.innerHTML = ''
  res.innerHTML = ''
  tabela = []
}