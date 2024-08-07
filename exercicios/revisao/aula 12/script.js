function enviar() {
  var txthora = window.document.getElementById('ihora')
  var hora = Number(txthora.value)
  var res = window.document.getElementById('res')
  var img = window.document.querySelector('img#imagem')
  var botao = window.document.getElementById('enviar')

  if (hora < 2) {
    res.innerHTML = `Agora é <strong>${hora}</strong> hora.`
  } else {
    res.innerHTML = `Agora são <strong>${hora}</strong> horas.`
  }
  

  if (hora < 12) {
    img.src = 'img/morning.png'
    window.document.body.style.backgroundColor = '#006eff'
  } else if (hora < 18) {
    img.src = 'img/afternoon.png'
    botao.style.backgroundColor = '#b56300'
    botao.style.color = 'white'
    window.document.body.style.backgroundColor = '#b56300'
  } else if (hora < 24) {
    img.src = 'img/night.png'
    botao.style.backgroundColor = '#212121'
    botao.style.color = 'white'
    window.document.body.style.backgroundColor = '#212121'
  } else {
    img.src = 'img/padrao.png'
    res.innerHTML = '[ERRO!] Valor Inválido'
    window.document.body.style.backgroundColor = 'darkred'
  }
}