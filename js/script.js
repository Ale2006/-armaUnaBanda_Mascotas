const productos = [
  {nombre:"china", animal: "Perro", sexo: "hembra", raza: "picher"},
  {nombre:"alma", animal: "Perro", sexo: "hembra", raza: "bulldog frances"},
  {nombre:"cristobal", animal: "Perro", sexo: "macho", raza: ""},
  {nombre:"athila", animal: "Perro", sexo: "hembra", raza: ""},
  {nombre:"cabeza", animal: "Perro", sexo: "macho", raza: ""},
  {nombre:"luna", animal: "Perro", sexo: "hembra", raza: "border coliie"},
]

const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#boton");
const resultado= document.querySelector("#resultado");
const filtrar = ()=>{
  //console.log(formulario.value);
  resultado.innerHTML = "";
  const texto = formulario.value.toLowerCase();
  for (let producto of productos){
    let nombre = producto.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      resultado.innerHTML += `
      <li>${producto.nombre} - animal: ${producto.animal} - sexo: ${producto.sexo} - raza: ${producto.raza}</li>
      `
    }
  }
  if (resultado.innerHTML === "") {
    resultado.innerHTML += `
    <li>Producto no encontrando...</li>
    `
  }
}

boton.addEventListener('click', filtrar);
formulario.addEventListener("keyup",filtrar)

filtrar();
