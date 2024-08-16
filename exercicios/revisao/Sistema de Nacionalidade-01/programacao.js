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
      fundo.style.backgroundColor = '#C90F25'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src','paraguai.png')
      res.appendChild(img)
      res.innerHTML += '<p>eres <span style="font-weight: bold; color: #C90F25;">paraguayo</span></p>'
    } else if (nacionalidade.value == 'Inglaterra') {
      fundo.style.backgroundColor = 'white'
      titulo.style.color = '#CD1928'
      rodape.style.color = '#CD1928'
      img.setAttribute('src', 'inglaterra.png')
      res.appendChild(img)
      res.innerHTML += '<p>You are <span style="font-weight: bold; color: #CD1928;">English</span></p>'
    } else if (nacionalidade.value == 'Espanha') {
      fundo.style.backgroundColor = '#C11F26'
      titulo.style.color = '#FFC40E'
      rodape.style.color = '#FFC40E'
      img.setAttribute('src','espanha.png')
      res.appendChild(img)
      res.innerHTML += '<p>tu eres <span style="font-weight: bold; color: #C11F26;">español</span></p>'
    } else if (nacionalidade.value == 'Alemanha') {
      fundo.style.backgroundColor = 'black'
      titulo.style.color = '#D60000'
      rodape.style.color = '#F7C800'
      img.setAttribute('src','alemanha.png')
      res.appendChild(img)
      res.innerHTML += '<p>Du bist <span style="font-weight: bold;">Deutscher</span></p>'
    } else if (nacionalidade.value == 'Angola') {
      fundo.style.backgroundColor = '#CC092F'
      titulo.style.color = 'black'
      rodape.style.color ='black'
      img.setAttribute('src','angola.png')
      res.appendChild(img)
      res.innerHTML += '<p>Você é <span style="font-weight: bold; color: #F7C500;">angolano</span></p>'
    } else if (nacionalidade.value == 'Egito') {
      fundo.style.backgroundColor = 'white'
      img.setAttribute('src', 'egito.png')
      res.appendChild(img)
      res.innerHTML += '<p>أنت <span style="font-weight: bold; color: #C91328;">مصري</span></p>'
    } else if (nacionalidade.value == 'Madagascar') {
      fundo.style.backgroundColor = '#F14038'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src','madagascar.png')
      res.appendChild(img)
      res.innerHTML += '<p><span style="font-weight: bold; color:#00803B; ">Madascarene</span> ianao</p>'
    } else if (nacionalidade.value == 'Russia') {
      fundo.style.backgroundColor = '#0036A8'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src','russia.png')
      res.appendChild(img)
      res.innerHTML += '<p>Ты <span style="font-weight: bold; color: #CE2A1D;">Русский</span></p>'
    } else if (nacionalidade.value == 'China') {
      fundo.style.backgroundColor = '#EF1620'
      titulo.style.color = '#FFFF00'
      rodape.style.color = '#FFFF00'
      img.setAttribute('src','china.png')
      res.appendChild(img)
      res.innerHTML += '<p>你是 <span style="font-weight: bold; color: #EF1620;">中國人</span></p>'
    } else if (nacionalidade.value == 'Índia') {
      fundo.style.backgroundColor = '#F7651F'
      titulo.style.color = 'white'
      rodape.style.color = 'white'
      img.setAttribute('src','india.png')
      res.appendChild(img)
      res.innerHTML += '<p>तुम हो <span style="font-weight: bold; color: #046736;">भारतीय</span></p>'
    }
  }
}