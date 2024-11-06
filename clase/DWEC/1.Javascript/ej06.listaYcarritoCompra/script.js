//constantes y variables
const txtAdd = document.getElementById("txtAdd");
const btnAdd = document.getElementById("btnAdd");
const mylist = document.getElementById("mylist");
const mycart = document.getElementById("mycart");

const btnSelAll = document.getElementById("btnSelAll");
const btnSelNot = document.getElementById("btnSelNot");
const btnInvSel = document.getElementById("btnInvSel");
const btnMovSel = document.getElementById("btnMovSel");
const btnDelSel = document.getElementById("btnDelSel");

//que al abrir la app web el foco este en la caja de texto y vaciar
txtAdd.value = ""
txtAdd.focus()


//el usuario puede añadir items a su lista a traves del INTRO en la caja
//(al pulsar INTRO, se añade el item  a la lista y se vacia la caja)
txtAdd.addEventListener("keyup", function(event) {
    if (event.key === "Enter"){
        addItemToList(txtAdd.value)
    }
})

btnAdd.addEventListener("click",addItemToList)


function addItemToList(){
    if(txtAdd.value.trim().length > 0){//el if es para que si no escribe nada de texto o lo que sea que no se añada a la lista
    let nuevoli = document.createElement("li")
    mylist.append(nuevoli)//el append conecta la pabra con la lista de palabras anteriores
    nuevoli.textContent = txtAdd.value.trim() //el trim te quita los espacios del principio y los del final(son innecesarios) y si dejas muchos espacios entre las palabras solo te deja un espacio
    nuevoli.addEventListener("click",function(){
        //nuevoli se ponga amarillo
        //si esta seleccionado que lo quite y si no esta seleccionado que lo haga
        // if(nuevoli.classList.contains("seleccionado"))
        //     nuevoli.classList.remove("seleccionado")
        // else
        // nuevoli.classList.add("seleccionado")
        nuevoli.classList.toggle("seleccionado")//el toggle hace lo mismo que el codigo anterior
    })
    
    txtAdd.value = ""    //esto es para que se vacie
    }
    
}

//seleccionar todos
btnSelAll.addEventListener("click",function(){
    const todosLosLi = mylist.querySelectorAll("li")
    todosLosLi.forEach( li => li.classList.add("seleccionado"))
})
//seleccionar ninguno
btnSelNot.addEventListener("click",function(){
    const todosLosLi = mylist.querySelectorAll("li")
    todosLosLi.forEach( li => li.classList.remove("seleccionado"))
})
//invertir lo seleccionado
btnInvSel.addEventListener("click",function(){
    const todosLosLi = mylist.querySelectorAll("li")
    todosLosLi.forEach( li => li.classList.toggle("seleccionado"))//togle es para invertir
})

//mover lo seleccionado abajo
btnMovSel.addEventListener("click",function(){
    const liSel = mylist.querySelectorAll("li.seleccionado")//ahora es queryselectorALL porque quieres seleccionar varios
    liSel.forEach(li => mycart.append(li))
        //crear un nuevo LI para el carrito
        const  nuevoli = li.cloneNode(true)//clonenode no clona listeners
        nuevoli.classList.remove("seleccionado")
        mycart.append(li.cloneNode())
        //eliminar el LI original (el de mylist)
        li.remove()
})

//borrar todo
btnDelSel.addEventListener("click",function(){
    //Recorrer todos los li y averiguar si estan selccionados o no, para borrarlos
    // const todosLosLi = document.getElementsByTagName("LI")
    // Otra manera de hacerlo
    // Array.from(todosLosLi).forEach(li =>{
    //     if(li.classList.contains("seleccionado"))//si li.class esta seleccionado, borralo
    //         li.remove()
    // })
    // for(li of todosLosLi){
    //     if(li.classList.contains("seleccionado"))
    //         li.remove()
    // }

     //ALT : recuperar directamente solos los que estan seleccionados
     const todosLosLi = document.querySelectorAll("li.seleccionado")
     todosLosLi.forEach(li => li.remove())
     //coge el array, le ordena un bucle(for each), cada elemento del array lo nombra como ly y ejecuta la funcion en cada ly
     //esto de abajo es lo mismo que lo de arriba(todosLosLi.forEach(li => li.remove()))
     //  for (let i=0; i<todosLosLi.length; i++){
     //     todosLosLi[i].remove
     //  }
})


