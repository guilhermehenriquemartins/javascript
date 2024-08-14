function tabuada() {
  var num = window.document.getElementById('txtn')
  var tab = window.document.getElementById('txtres')
  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
    tab.innerHTML = ''
  } else {
    var numero = Number(num.value)
    tab.innerHTML = ''
    for (var c = 1;c <= 10;c++) {
      var valor = window.document.createElement('option')
      valor.text = `${numero} x ${c} = ${numero*c}`
      tab.appendChild(valor)
    }
  }
}