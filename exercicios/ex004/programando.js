function tabuada() {
  var num = window.document.getElementById('inum')
  var tab = window.document.getElementById('itxttab')
  if (num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    var numero = Number(num.value)
    tab.innerHTML = ''
    for (var c = 1; c <= 10; c++) {
      var item = window.document.createElement('option')
      item.text = `${numero} x ${c} = ${numero*c}`
      tab.appendChild(item)
    }
  }
}