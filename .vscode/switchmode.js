function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light") //A função toggle (do próprio JS) realiza a substituição dentro da lista de classe do HMTL)

  //trocando a imagem
  //Busca a tag img para poder alterar a foto. usa o mesmo seletor que o CSS '#profile img'
  const img = document.querySelector("#profile img")

  //se o html contém o light na sua lista de classes
  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/fotoperfil.png")

    //caso não contenha execute...
  } else {
    img.setAttribute("src", "/assets/Avatar.jpg")
  }
}
