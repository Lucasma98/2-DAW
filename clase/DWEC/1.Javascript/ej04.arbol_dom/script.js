//Recuperar y alterar una etiqueta existente
const titulos = document.getElementsByTagName("h1")
//devuelve [primer H1, segundo H1, tercer H1]
titulos[0].textContent = "nuevo titulo"

//Añadir una nueva etiqueta
const nuevoH2 = document.createElement("h2")
//agregar una etiqueta hija (el h2 recien creado) a BODY
document.body.append(nuevoH2)
nuevoH2.textContent = "titulo de nivel 2 recién añadido"

//Eliminar una etiqueta existente
const hiperenlaces = document.getElementsByTagName("a") //bytagname es porque es una etiqueta <h1> o <a href>.Cundo ponemos en el html id es con getelementbyid.
hiperenlaces[0].remove() //bora el enlace <a href="https://www.um.es">UM</a>

//Insertar en body una lista ul y dos items LI "tomate" y "lechuga"
const nuevaUL = document.createElement("ul")
document.body.append(nuevaUL)
//--
let nuevoLI1 = document.createElement("li")//con let puedes reutilizar, con const solo una vez y en este caso tendrias que copiar y pegar pero cambiarle el nombre
nuevaUL.append(nuevoLI1)
nuevoLI1.textContent = "tomate"
//--
nuevoLI1 = document.createElement("li")
nuevaUL.append(nuevoLI1)
nuevoLI1.textContent = "lechuga"
