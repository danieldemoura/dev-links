const button = document.querySelector("#switch button")
button.onclick = toggleMode

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Daniel de Moura, sorrindo com uma camisa azul, de baixo de uma arvore, com o fundo embaçado"
    )
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute("alt", "Imagem do personagem Yato do Anime de Noragami")
  }
}
