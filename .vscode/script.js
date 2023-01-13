function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')){
  //     html.classList.remove('light')
  // }else{
  //     html.classList.add('light')
  // }

  // ABAIXO CODIGO JA PRONTO DO SISTEMA ABAIXO

  html.classList.toggle("light")

  // PEGAR A TAG IMAGE
  const img = document.querySelector("#profile img")

  // SUBSTITUIR A IMAGEM
  if (html.classList.contains("light")) {
    // SE TIVER LIGHTMODE, ADICIONAR A IMAGEM LIGHT
    img.setAttribute("src", "./assets/gato-bright.jpg")
  } else {
    // SE TIVER DARKMODE, MANTER A IMAGEM NORMAL
    img.setAttribute("src", "./assets/gato-dark.jpg")
  }
}
