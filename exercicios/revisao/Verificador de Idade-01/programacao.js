function entrou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#0076ba'
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

function mover() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = '#0076ba'
  botao.style.color = 'white'
}

function verificar() {
  var data = new Date()
  var anoatual = data.getFullYear()
  var nasc = window.document.getElementById('inas')
  var anonascimento = Number(nasc.value)
  var gen = window.document.getElementsByName('gen')
  var res = window.document.getElementById('res')
  var idade = anoatual - anonascimento
  var genero = ''

  if (nasc.value.length == 0) {
    window.alert('Digite o ano de nascimento para dar continuidade')
  } else if (anonascimento > anoatual) {
    window.alert('Valor inválido! Digite novamente.')
  } else {
    var img = window.document.createElement('img')
    if (gen[0].checked) {
      genero = 'Homem'
      res.innerHTML = `<p>Identificamos ${genero} com ${idade} anos de idade</p>`
      res.style.textAlign = 'center'
      if (idade < 12) {
        img.setAttribute('src','bebe-homem.png')
        res.appendChild(img)
      } else if (idade < 20) {
        img.setAttribute('src','jovem-homem.png')
        res.appendChild(img)
      } else if (idade < 50) {
        img.setAttribute('src','adulto-homem.png')
        res.appendChild(img)
      } else if (idade >= 50) {
        img.setAttribute('src','anciao-homem.png')
        res.appendChild(img)
      }
    } else if (gen[1].checked) {
      genero = 'Mulher'
      res.innerHTML = `<p>Identificamos ${genero} com ${idade} anos de idade</p>`
      res.style.textAlign = 'center'
      if (idade < 12) {
        img.setAttribute('src','bebe-mulher.png')
        res.appendChild(img)
      } else if (idade < 20) {
        img.setAttribute('src','jovem-mulher.png')
        res.appendChild(img)
      } else if (idade < 50) {
        img.setAttribute('src','adulto-mulher.png')
        res.appendChild(img)
      } else if (idade >= 50) {
        img.setAttribute('src','anciao-mulher.png')
        res.appendChild(img)
      }
    } else {
      window.alert('ERRO: Selecione um dos gêneros para dar continuidade')
    }
  }
}