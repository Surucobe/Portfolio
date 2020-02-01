import projects from './assets/projects.js';
import Templates from './assets/Templates.js';

const $gallery = document.getElementById('gallery')
const test = document.getElementById('welcome')

//testing area

//

const Canvas = new Templates() //clase que almacena los templates

//funcion para plasmar los strings en js y pasarlos a html
function printTemplate(elm, string){
  
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = string
  const tem = html.body.children[0]
  elm.append(tem)
}

printTemplate(test, Canvas.welcomeTemplate()) //printeando seccion de bienvenida

//printeando galeria de proyectos, falta llenar los proyectos
projects.forEach((item) =>{
  if(item.ready === true){
    printTemplate($gallery, Canvas.galleryTemplate(item))
  }else{
    return
  }
})