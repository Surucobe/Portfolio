const $logo = document.getElementById('logo')

//$logo.onclick = () => $logo.style = 'color: white;'

$logo.addEventListener('click', (event) => {
  if(event.target.style.color != 'white'){
    $logo.style = 'color: white;'
  }else{
    $logo.style = 'color: #008080;'
  }
})
