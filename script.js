function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // Pegar a tag img
  const img = document.querySelector('#profile img')

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Avatar em modo claro')
  } else {
    // Se tiver dark mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Avatar em modo escuro')
  }

}