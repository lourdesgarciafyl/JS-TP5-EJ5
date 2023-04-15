let parrafoHoras = document.querySelector(`#horas`); 
let parrafoMinutos = document.querySelector(`#minutos`);
let parrafoSegundos = document.querySelector(`#segundos`);
let btnStart = document.querySelector(`#btnPlay`)
let btnPause = document.querySelector(`#btnPause`)
let btnReset = document.querySelector(`#btnReset`)
let horas = 0
let minutos = 0
let segundos = 0

btnStart.addEventListener(`click`, empezar);
btnPause.addEventListener(`click`, parar);
btnReset.addEventListener(`click`, reiniciar);

function empezar(){
    tiempo = setInterval(controlTiempo, 1000)
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnReset.disabled = false;
}

function parar(){
    clearInterval(tiempo)
    btnStart.disabled = false
    btnPause.disabled = true
    btnReset.disabled = false
}

function reiniciar(){
    clearInterval(tiempo)
    parrafoHoras.innerHTML = `00`
    parrafoMinutos.innerHTML = `: 00`
    parrafoSegundos.innerHTML = `: 00`
    horas = 0
    minutos = 0
    segundos = 0
    btnStart.disabled = false
    btnPause.disabled = true
    btnReset.disabled = true
}

function controlTiempo(){
    if(segundos < 59){
        segundos++
        if(segundos < 10){
            parrafoSegundos.innerHTML =`: 0${segundos}` 
        }else{
            parrafoSegundos.innerHTML = `: ${segundos}` 
        } 
    } 
    if(segundos == 59){
        segundos = -1
    }
    if (segundos == 0){
        minutos++
        if(minutos < 10){
            parrafoMinutos.innerHTML =`: 0${minutos}`
        } else{
            parrafoMinutos.innerHTML = `:${minutos}`
        }
    }
    if(minutos == 59){
        minutos = -1
    }
    if((segundos == 0) && (minutos == 0)){
        horas++
        if(horas < 10){
            parrafoHoras.innerHTML = `0${horas}`
        } else{
            parrafoHoras.innerHTML = `${horas}`
        }
    }
    
}
