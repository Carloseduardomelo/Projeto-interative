const checkboxes = document.getElementsByClassName('butt')
const Button = document.getElementById('submit')
const primeiroQuadro = document.getElementById('avali')
const segundoQuadro = document.getElementById('final')
const nota = document.getElementById('nota')
let marcado = 0

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function () {
    if (checkboxes[i]) {
      marcado = checkboxes[i].value
    }
  });
}


Button.addEventListener('click' , () =>{

  if(marcado == 0){
    console.log('error')
  }else{
    primeiroQuadro.style.display = 'none'
    segundoQuadro.style.display = 'flex'
    nota.innerHTML = marcado
  }
})