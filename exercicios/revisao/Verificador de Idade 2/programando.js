function verificar() {
  var data = new Date()
  var anoatual = data.getFullYear()
  var anonascimento = window.document.getElementById('txtinas')
  var idade = anoatual - Number(anonascimento.value)
  var gen = window.document.getElementsByName('gen')
  var genero = ''
  var res = window.document.querySelector('div#res')
  var img = window.document.createElement('img')

  if (anonascimento.value.length == 0 || anonascimento.value > anoatual) {
    window.alert('[ERRO]: Verifique os dados preenchidos e tente novamente')
  } else {
    if (gen[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade <= 12) {
        img.setAttribute('src','bebe-homem.png')
      } else if (idade > 12 && idade < 21 ) {
        img.setAttribute('src','jovem-homem.png')
      } else if (idade >= 21 && idade < 50) {
        img.setAttribute('src','adulto-homem.png')
      } else {
        img.setAttribute('src','anciao-homem.png')
      }
    } else {
      genero = 'Mulher'
      if (idade >= 0 && idade <= 12) {
        img.setAttribute('src','bebe-mulher.png')
      } else if (idade > 12 && idade < 21 ) {
        img.setAttribute('src','jovem-mulher.png')
      } else if (idade >= 21 && idade < 50) {
        img.setAttribute('src','adulto-mulher.png')
      } else {
        img.setAttribute('src','anciao-mulher.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos de idade</p>`
    res.appendChild(img)
  }
}