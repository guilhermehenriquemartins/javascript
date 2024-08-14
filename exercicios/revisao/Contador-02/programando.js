function contar() {
  var txti = window.document.getElementById('txti')
  var txtf = window.document.getElementById('txtf')
  var txtp = window.document.getElementById('txtp')
  var res = window.document.querySelector('div#res')
  var inicio = Number(txti.value)
  var fim = Number(txtf.value)
  var passo = Number(txtp.value)

  res.innerHTML = ''
  if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0) {
    res.innerHTML = 'Um ou mais campos não foram preenchidos, tente novamente!'
  } else if (inicio < fim) {
    res.innerHTML = 'Contando: <br>'
    if (passo == 0) {
      window.alert('Passo Inválido! Considerando PASSO 1')
      passo = 1
    }
    for (inicio ; inicio <= fim ; inicio += passo) {
      res.innerHTML += `${inicio} \u{1F449} `
    }
    res.innerHTML += '\u{1F3C1}'
  } else if (inicio > fim) {
    res.innerHTML = 'Contando: <br>'
    if (passo == 0) {
      window.alert('Passo Inválido! Considerando PASSO 1')
      passo = 1
    }
    for (inicio ; inicio >= fim ; inicio -= passo) {
      res.innerHTML += `${inicio} \u{1F449} `
    }
    res.innerHTML += '\u{1F3C1}'
  }
}