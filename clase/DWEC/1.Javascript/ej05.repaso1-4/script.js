/* Reto 1
Crea un documento HTML que solicite cuántos caramelos tienes
 y entre cuántas personas quieres repartirlos.
 A continuación el programa escribirá el mensaje:
 "Si tienes __ caramelos y hay __ personas,
 tienes que repartir __ caramelos a cada uno
 y te sobran __ caramelos".
*/
const box = document.getElementById("caramelosInput");//algo y input, es para que tenga que ingresar algo
const box2 = document.getElementById("personasInput");
const box3 = document.getElementById("respuesta");

box.addEventListener("keyup", function(ev){
    if(ev.key == "Enter"){
        box2.focus();
    }
});

box2.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        dividircaramelos();
    }
});

function dividircaramelos(){
    //comprobar que hay 2 numeros correctos escritos y dividir
    let numbox = parseInt(box.value)
    let numbox2 = parseInt(box2.value)

    if(numbox >= 0 && numbox2 > 0){
        let parteentera = Math.floor (numbox / numbox2)
        let restantes = numbox % numbox2
        box3.textContent = "Repartes " + parteentera + " caramelos a cada persona y te sobran " + restantes + " caramelos"
    } else {
        box3.textContent = "Debes escribir numeros enteros"
    }
        
   }











