import projects from './assets/projects.js';
import Templates from './assets/Templates.js';

const Canvas = new Templates(); //clase que almacena los templates

const $gallery = document.getElementById('gallery');
const test = document.getElementById('welcome');
const $clock = document.getElementById("clock");

//testing area
function setTime() {
  const Time = new Date;
  let Hours = Time.getHours();
  let Minutes = Time.getMinutes();

  while ($clock.firstChild) {
    $clock.removeChild($clock.firstChild);
  }
  printTemplate($clock, Canvas.clockTemplate(Hours, Minutes));
}

setInterval(setTime, 20000);
//

//funcion para plasmar los strings en js y pasarlos a html
function printTemplate(elm, string) {

  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = string;
  const tem = html.body.children[0];
  elm.append(tem)
}

printTemplate(test, Canvas.welcomeTemplate()); //printeando seccion de bienvenida

//printeando galeria de proyectos, falta llenar los proyectos
projects.forEach((item) => {
  if (item.ready === true) {
    printTemplate($gallery, Canvas.galleryTemplate(item));
  } else {
    return;
  }
})