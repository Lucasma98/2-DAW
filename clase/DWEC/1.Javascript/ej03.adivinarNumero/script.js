
const intentosInput = document.getElementById("intentosInput")
const salidaTA = document.getElementById("salidaTA")
const secreto = Math.floor(Math.random()*100 + 1)
salidaTA.value = ""
console.log(secreto)
let numIntentos = 6


intentosInput.addEventListener("keyup",function(ev){
    if (ev.key == "Enter"){
        comprobarIntento()
    }
})

function comprobarIntento(){
    let intento = parseInt(intentosInput.value)
    if (intento >=1 && intento <=100) {
        //comprobar si es el nº a adivinar
        numIntentos--
        intentosInput.value = ""//esto es para borrar el numero despues de haberlo ingresado y no tener que borrarlo tu
        if(intento > secreto)
            salidaTA.value += "\n Con el numero " + intento + " te has pasado"
        else if( intento < secreto)
            salidaTA.value += "\n Con el numero " + intento + " te has quedado corto"
        else {
            salidaTA.value += "\n ¡Has acertado!"
            intentosInput.disabled = true
        }
        if (numIntentos == 0) { 
            if(intento != secreto)
            salidaTA.value += "\n Has agotado los intentos "
            intentosInput.disabled = true
        }
        intentosInput.focus
    }
}