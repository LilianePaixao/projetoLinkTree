function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')



  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }
  */

  //pegar a tag img
  const img = document.querySelector("#profile img")

  

  if(html.classList.contains('light')){
    //se tiver light mode add a img light

    //substituir a imagem
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de perfil de Liliane Paixão Light')

  } else {
    //se tiver sem light, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de perfil de Liliane Paixão Dark')
  }
  
}