function entrou() {
  var botao1 = window.document.getElementById('botao1')
  botao1.style.backgroundColor = '#00aaff'
  botao1.style.transitionDuration = '.2s'
  botao1.style.cursor = 'pointer'
}

function saiu() {
  var botao1 = window.document.getElementById('botao1')
  botao1.style.backgroundColor = 'black'
  botao1.style.color = 'white'
}

function clicou() {
  var botao1 = window.document.getElementById('botao1')
  botao1.style.backgroundColor = 'white'
  botao1.style.color = 'black'
  botao1.style.transitionDuration = '0s'
}

function moveu() {
  var botao1 = window.document.getElementById('botao1')
  botao1.style.backgroundColor = '#00aaff'
  botao1.style.color = 'white'
}

function entrar() {
  var botao2 = window.document.getElementById('botao2')
  botao2.style.backgroundColor = '#00aaff'
  botao2.style.cursor = 'pointer'
  botao2.style.transitionDuration = '.2s'
}

function sair() {
  var botao2 = window.document.getElementById('botao2')
  botao2.style.backgroundColor = 'black'
  botao2.style.color = 'white'
  botao2.style.transitionDuration = '.1s'
}

function clicar() {
  var botao2 = window.document.getElementById('botao2')
  botao2.style.backgroundColor = 'white'
  botao2.style.color = 'black'
  botao2.style.transitionDuration = '0s'
}

function mover() {
  var botao2 = window.document.getElementById('botao2')
  botao2.style.backgroundColor = '#00aaff'
  botao2.style.color = 'white'
}

var lista = []
var res = window.document.getElementById('res')

function adicionar() {
  var txtn = window.document.getElementById('txtn')
  var select = window.document.getElementById('ires')

  if (txtn.value.length == 0) {
    window.alert('O campo está vazio. Tente novamente.')
  } else {
    var numero = Number(txtn.value)
    if (numero > 100 || numero < 1) {
      window.alert('Valor inválido, está fora de 1 e 100. Tente novamente')
    } else {
      if (lista.indexOf(numero) == -1) {
        res.innerHTML = ''
        var item = window.document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        item.value = `n${numero}`
        lista.push(numero)
        select.appendChild(item)
      } else {
        window.alert('Valor inválido ou já encontrado na lista')
      }
    }
  }
}

//////// FUNÇÃO PRINCIPAL ////////

function finalizar() {
  if (lista.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    res.innerHTML = total(lista)
    res.innerHTML = maior(lista)
    res.innerHTML = menor(lista)
    res.innerHTML = soma(lista)
    res.innerHTML = media(lista)
  }
}

//////////////////////////////////


//////// FUNÇÃO TOTAL ////////
function total(lista) {
  var total = ''
  var total = lista.length
  return `<p>Ao todo, temos ${total} números cadastrados.</p>`
}
/////////////////////////////


//////// FUNÇÃO MAIOR ////////
function maior(lista) {
  var maior = ''
  for (c=0; c < lista.length; c++) {
    if (lista[c] > maior) {
      maior = lista[c]
    }
  }
  return res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
}
/////////////////////////////

//////// FUNÇÃO MENOR ////////
function menor(lista) {
  var menor = lista[0]
  for (c = 0; c < lista.length; c++) {
    if (lista[c] < menor)
      menor = lista[c]
  }
  return res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
}
/////////////////////////////

//////// FUNÇÃO SOMAR TODOS OS VALORES ////////
function soma(lista) {
  var soma = 0
  for (c in lista) {
    soma += lista[c]
  }
  return res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
}
//////////////////////////////////////////////

//////// FUNÇÃO MÉDIA ////////
function media(lista) {
  var total = 0
  var media = 0
  for (c in lista) {
    total += lista[c]
  }
  media = total / lista.length
  return res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}
/////////////////////////////