function entrar() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#0062ad'
  botao.style.transitionDuration = '.2s'
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
  botao.style.backgroundColor = '#0062ad'
  botao.style.color = 'white'
}

function contar() {
  var txti = window.document.getElementById('txti')
  var txtf = window.document.getElementById('txtf')
  var txtp = window.document.getElementById('txtp')
  var res = window.document.getElementById('res')
  var inicio = Number(txti.value)
  var fim = Number(txtf.value)
  var passo = Number(txtp.value)
  res.innerHTML = ''

  if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
    res.innerHTML = 'Um ou mais campos não foram preenchidos, tente novamente!'
  } else if (passo == 0) {
    window.alert('Valor para [Passo] Inválido. Considerando PASSO 1')
    passo = 1
    if (inicio < fim) {
      for (inicio; inicio <= fim; inicio+= passo) {
        res.innerHTML += `${inicio} \u{1F449} `
      }
      res.innerHTML += ` \u{1F3C1}`
    }
    else if (inicio > fim) {
      for (inicio; inicio >= fim; inicio -= passo) {
        res.innerHTML += `${inicio} \u{1F449} `
      }
      res.innerHTML += ` \u{1F3C1}`
    }
  } else {
    if (inicio < fim) {
      for (inicio; inicio <= fim; inicio+= passo) {
        res.innerHTML += `${inicio} \u{1F449} `
      }
      res.innerHTML += ` \u{1F3C1}`
    }
    else if (inicio > fim) {
      for (inicio; inicio >= fim; inicio -= passo) {
        res.innerHTML += `${inicio} \u{1F449} `
      }
      res.innerHTML += ` \u{1F3C1}`
    }
  }
}