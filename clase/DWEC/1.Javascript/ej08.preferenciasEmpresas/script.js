const choice1 = document.querySelector("#choice1")//hay que poner # para que te de el id, sin # es una etiqueta.
const choice2 = document.querySelector("#choice2")
//es querySelector y no es querySelectorALL porque solo quieres un id
const empresas = [
    "Apple",
    "Google",
    "IBM",
    "Microsoft",
    "Nvidia",
    "Intel",
    "Embargos a lo bestia"
]

//reto 1: rellenar el primer SELECT con estas empresas


//esto es para darle un numero a cada empresa(apple 1, google 2, imb 3)(el let contador)
empresas.forEach(empresa,index => { //para recorrer el array de cada empresa (empresa sin s es porque es el nombre que le he dado)
    let newOption = document.createElement("OPTION")// crear un option vacio
    choice1.append(newOption)//asignar el option
    newOption.textContent = empresa
    newOption.value = index + 1//le estas sumando el valor 1 a cada index(a la empresa 1 le asigna el valor 0, a la segunda le suma 1 al valor 0 y le da el numero 1 a la empresa y asi sucesivamente)
})


//reto 2: que al elegir una empresa en el primer SELECT se  rellene
// el segundo SELECT con el resto de empresas no elegidas

choice1.addEventListener("change", function(){//escuche el choice 1,
    choice2.innerHTML = '<option value"0">(choose one)</option>'//esto es para que cuando eligas la segunda opcion, y quieras cambiar la primera opcion, en vez de que te de todas las opciones la nueva y vieja elegida, solo te de las opciones de la nueva elegida(si no lo entiendes quitalo este codigo, y prueba a cambiar de opcion 1 despues de ya haber elegido una y comprueba las segundas opciones)
    if ( choice1.value > 0){//comprobar si ha elegido una empresa. 
        //rellenar el SELECT choice 2
        let contador = 1
        let empresaElegida1 = choice1.options[choice1.selectedIndex].textContent
        //nombre de la empresa que ha elegido en el choice 1(let empresaElegida1)

        empresas.forEach( empresa =>{//para recorrer el array de cada empresa
            if(empresa != empresaElegida1){//si la empresa es distinta a la elegida en la primera opcion
             //esto es para que aparezcan las demas empresas
            let newOption = document.createElement("OPTION")
            choice2.append(newOption)
            newOption.textContent = empresa
            newOption.value = contador++
            }
        })
    }
})
