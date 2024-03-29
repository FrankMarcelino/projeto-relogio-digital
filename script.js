const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(() =>{
  let tempo = new Date()
  let horasAtual = tempo.getHours()
  let minutosAtual = tempo.getMinutes()
  let segundosAtual = tempo.getSeconds()

  if (horasAtual < 10) horasAtual = '0'  +  horasAtual
  if (minutosAtual < 10) minutosAtual = '0' + minutosAtual
  if (segundosAtual < 10) segundosAtual = '0' + segundosAtual

  horas.textContent = horasAtual
  minutos.textContent = minutosAtual
  segundos.textContent = segundosAtual

} )

// botao modo escuro

const darkModeToggle = document.getElementById('dark-mode');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});

