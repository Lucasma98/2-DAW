//almacenar informacion
//let numero = 10
let nombre = "Pocoyo"
let caducado = true //un boleano
let amigos = ["ballena", "perro", "pajaro"]//array de string //[] es un array
let personaje = { //{} llaves es un objeto 
    tipo: "animado",
    numOjos: 8
}
//guardar variable en LocalStorage
localStorage.setItem("numeroEnLs", 10)//guardar en el nombre numeroEnLs, numero(tienes que quitar el comentario de let de arriba) o puedes poner directamente el numero
localStorage.setItem("nombreEnLs", "Pocoyo")
localStorage.setItem("caducadoEnLs", JSON.stringify(true))
localStorage.setItem("amigosEnLs", JSON.stringify(amigos))//JSON.stringify hace que antes de que te lo pase(amigos) lo transforma en cadena
localStorage.setItem("personajeEnLs", JSON.stringify(personaje))

//cuando pones typeof en vez de darte el resultado te dice lo que es(un string)
//console.log(/*type of*/parseInt(localStorage.getItem("numeroEnLs")))//recuperar la informacion poniendo el nombre, la inforamcion siempre te devuelve o un string o un null
console.log(JSON.parse (localStorage.getItem("caducadoEnLs")))//JSON.parse te desenvuelve la cadena(te deja una lista hacia abajo)
console.log(JSON.parse(localStorage.getItem("amigosEnLs"))[2])//[2] te devuelve la  3 palabra porque es(0 despues 1 y despues 2)
console.log(JSON.parse (localStorage.getItem("personajeEnLs")))

if(JSON.parse(localStorage.getItem("caducadoEnLs"))){
    
}
