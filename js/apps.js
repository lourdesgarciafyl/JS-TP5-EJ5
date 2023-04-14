let parrafoHoras = document.querySelector(`#horas`); 
let parrafoMinutos = document.querySelector(`#minutos`);
let parrafoSegundos = document.querySelector(`#segundos`);
let btnStart = document.querySelector(`#btnPlay`)
let btnPause = document.querySelector(`#btnPause`)
let btnReset = document.querySelector(`#btnReset`)

btnStart.addEventListener(`click`, empezar);
btnPause.addEventListener(`click`, pararSeguir);
btnReset.addEventListener(`click`, reiniciar);

function empezar(){
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnReset.disabled = false;
}

function pararSeguir(){
    btnStart.disabled = true
    btnPause.disabled = false
    btnReset.disabled = false
}

function reiniciar(){
    parrafoHoras.innerHTML = `00`
    parrafoMinutos.innerHTML = `: 00`
    parrafoSegundos.innerHTML = `: 00`
    btnStart.disabled = false
    btnPause.disabled = true
    btnReset.disabled = true
}
function controlTiempo(){
}
