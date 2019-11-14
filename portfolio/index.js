import projects from './assets/projects.js';
import galleryTemplate from './assets/Templates.js';

const $gallery = document.getElementById('gallery')
const $logo = document.getElementById('logo')

//testing area

//

$logo.addEventListener('click', (event) => {
  if(event.target.style.color != 'white'){
    $logo.style = 'color: white;'
  }else{
    $logo.style = 'color: #008080;'
  }
})

function printTemplate(elm, string){
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = string
  const tem = html.body.children[0]
  elm.append(tem)
}

projects.forEach((item) =>{
  if(item.ready === true){
    printTemplate($gallery, galleryTemplate(item))
  }else{
    return
  }
})