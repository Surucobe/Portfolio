const $logo = document.getElementById('logo')

//$logo.onclick = () => $logo.style = 'color: white;'

$logo.addEventListener('click', (event) => {
  if(event.target.style.color != 'white'){
    $logo.style = 'color: white;'
  }else{
    $logo.style = 'color: #008080;'
  }
})

function printTemplate(element, string){
  let html = document.implementation.createHTMLDocument()
  html.body.innerHTML = string
  let tem = html.body.children[0]
  element.append(tem)
}