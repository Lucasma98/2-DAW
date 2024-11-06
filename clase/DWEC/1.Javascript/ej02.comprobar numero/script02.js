const box = document.getElementById("numberInput")
const analyzeBtn = document.getElementById("analyzeBtn") //capturamos el boton
const outputTa = document.getElementById("outputTa")

analyzeBtn.addEventListener("click",function(){ //le decimos al boton cosas
    analyzeNumber(box.value)
})
box.addEventListener("keydown",function(ev){
if(ev.key == "Enter")
    analyzeNumber(box.value)
})
function analyzeNumber(number)
{
    console.log("Hola")
    //Comprobar si el usuario ha usado "," en lugar de "." decimal
    number = number.replace(",",".")
    if (isNaN(number)){
        outputTa.value = "No has escrito un numero valido"
    } else{
        //decir si es par o impar
        if(Math.floor(number) % 2) outputTa.value = "Es impar"//el math.floor hace que solo coga la parte entera
        else outputTa.value = "Es par"
        //decir si es entero o flotante
        if(number % 1) outputTa.value += "\nEs flotante"//floor quita los decimales= 7,5 te pone 7
        else outputTa.value += "\nEs entero"
        //mostrar su tabla de multiplicar
        for(let i=0; i<=10; i++)
            //outputTa.value += "\n" + number + "x" + i + "=" + number*i
            outputTa.value += `\n${number}x${i}=${(number*i).toFixed(2)}`

    }
}