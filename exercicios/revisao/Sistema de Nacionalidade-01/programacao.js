function entrou() {
  var botao = window.document.getElementById('botao')
  botao.style.backgroundColor = 'gray'
  botao.style.color = 'black'
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
  botao.style.backgroundColor = 'gray'
  botao.style.color = 'black'
}

function verificar() {
  var nacionalidade = window.document.getElementById('inac')
  var res = window.document.getElementById('res')
  var img = window.document.createElement('img')
  var fundo = window.document.body
  var titulo = window.document.getElementsByTagName('h1')[0]
  var rodape = window.document.getElementsByTagName('footer')[0]

  if (nacionalidade.value.length == 0) {
    window.alert('Selecione a sua nacionalidade')
    res.style.display = 'none'
    fundo.style.backgroundColor = 'lightgray'
    titulo.style.color = 'black'
    rodape.style.color = 'black'
  } else {
    res.style.display = 'block'
    res.innerHTML = ''
    if (nacionalidade.value == 'Canadá') {
      fundo.style.backgroundColor = 'red'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src','canada.png')
      res.appendChild(img)
      res.innerHTML += '<p>You are <span style="font-weight: bold; color: red;">Canadian</span></p>'
    } else if (nacionalidade.value == 'Estados Unidos') {
      fundo.style.backgroundColor = 'darkblue'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src', 'eua.png')
      res.appendChild(img)
      res.innerHTML += '<p>You are <span style="font-weight: bold; color: darkblue;">American</span></p>'
    } else if (nacionalidade.value == 'México') {
      fundo.style.backgroundColor = 'darkgreen'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src', 'mexico.png')
      res.appendChild(img)
      res.innerHTML += '<p>Tu eres <span style="color: darkgreen; font-weight: bold;">Mexicano</span></p>'
    } else if (nacionalidade.value == 'Argentina') {
      fundo.style.backgroundColor = '#74acdf'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src', 'argentina.png')
      res.appendChild(img)
      res.innerHTML += '<p>eres <span style="font-weight: bold; color: #74acdf;">argentino</span></p>'
    } else if (nacionalidade.value == 'Brasil') {
      fundo.style.backgroundColor = '#009440'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src', 'brasil.png')
      res.appendChild(img)
      res.innerHTML += '<p>Você é <span style="font-weight: bold; color: #009440;">brasileiro</span></p>'
    } else if (nacionalidade.value == 'Paraguai') {

    }
  }
}