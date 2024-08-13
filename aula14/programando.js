function contar() {
  var n1 = window.document.getElementById('itxtinicio')
  var n2 = window.document.getElementById('itxtfim')
  var n3 = window.document.getElementById('ipasso')
  var res = window.document.querySelector('div#res')
  var inicio = Number(n1.value)
  var fim = Number(n2.value)
  var passo = Number(n3.value)

  if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
    res.innerHTML = 'Um ou mais campos não foram preenchidos, tente novamente!'
  } else if (inicio < fim) {
    if (passo == 0) {
      window.alert('Passo Inválido! Considerando PASSO 1')
      passo = 1
    }
    res.innerHTML = 'Contando: <br>'
    for (inicio; inicio <= fim ; inicio+= passo) {
      res.innerHTML += `${inicio} \u{1F449}`
    }
    res.innerHTML += '\u{1F3C1}'
  } else if (inicio > fim) {
    if (passo == 0) {
      window.alert('Passo Inválido! Considerando PASSO 1')
      passo = 1
    }
    res.innerHTML = 'Contando: <br>'
    for (inicio; inicio >= fim ; inicio-= passo) {
    res.innerHTML += `${inicio} \u{1F449}`
    }
    res.innerHTML += '\u{1F3C1}'
  }
}