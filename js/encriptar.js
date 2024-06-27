
//Funcion encriptar
function encriptar(){
    let texto = document.querySelector("#input-texto").value; //creamos variable y guardamos el valor que tiene el input
    let encriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat"); //creamos variable para guardar el valor del input y con .replace hacemos asignacion a las vocales
    let textoEncriptado = document.querySelector(".texto__encriptado"); // creamos variable para guardar el campo seleccionado por clase
    textoEncriptado.innerHTML = encriptado; // agregamos el valor agregado mediante innerHTML
    console.log(encriptado) // para ver en consola el texto encriptado
    ocultar(); 
}

//Funcion ocultar
function ocultar(){
    let textArea = document.querySelector("#textArea"); // creamos variable para almacenar el campo seleccionado por id
    textArea.style.display = "block"; // cambiamos el estilo del textarea display:"none" del CSS a  display="block" desde JS

    let buttonCopiar = document.querySelector("#button-copiar"); // creamos variable para almacenar el campo seleccionado por id
    buttonCopiar.style.display = "block"; // cambiamos el estilo del buttoncopiar display:"none" del CSS a  display="block" desde JS

    let buttonLimpiar = document.querySelector("#button-limpiar"); // creamos variable para almacenar el campo seleccionado por id
     buttonLimpiar.style.display = "block"; // cambiamos el estilo del buttonlimpiar display:"none" del CSS a  display="block" desde JS

      let imagen = document.querySelector("#imagen-investigador"); // creamos variable para almacenar el campo seleccionado por id
      imagen.style.display = "none"; // cambiamos el estilo de la img investigador display:"block" del CSS a  display="none" desde JS
   
}

function desencriptar(){
     let texto = document.querySelector("#input-texto").value;
     let desencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
     let textoDesencriptado = document.querySelector(".texto__encriptado");
     textoDesencriptado.innerHTML = desencriptado;
     console.log(desencriptado);
     console.log("Click en desencritar");
    ocultar();
}

//Funcion copiar
function copiar(){
    console.log("Click en copiar")
    let textoDesencriptado = document.querySelector(".texto__encriptado"); // creamos variable para almacenar el valor almacenado en el textarea selecinado por clase
    let button = document.getElementById("button-copiar"); // creamos variable para almacenar el boton por id
    navigator.clipboard.writeText(textoDesencriptado.textContent); // copiamos con navigator.clipboard.writeText el texto almacenado en el textarea
    alert("Texto Copiado"); // creamos alerta de texto copiado
    console.log("copiado")
    // button.textContent ="copiado"
    
}

//Funcion Limpiar
function limpiar(){
    let valorInput = document.getElementById("input-texto"); // creamos variable para almacenar el campo seleccionado por id
    valorInput.value = ""; // tomamos la varible y con .value asignamos string vacio

    let valorTextArea = document.getElementById("textArea"); // creamos variable para almacenar el campo seleccionado por id
    valorTextArea.style.display = "none"; // tomamos la varible y con .style.display cambiamos el display="block" en CSS por display="none" mediante JS

     let imagen = document.querySelector("#imagen-investigador"); // creamos variable para almacenar el campo seleccionado por id
      imagen.style.display = "block"; // tomamos la varible y con .style.display cambiamos el display="none" en CSS por display="block" mediante JS

      let buttonCopiar = document.querySelector("#button-copiar"); // creamos variable para almacenar el campo seleccionado por id
      buttonCopiar.style.display = "none"; // tomamos la varible y con .style.display cambiamos el display="block" en CSS por display="none" mediante JS
  
      let buttonLimpiar = document.querySelector("#button-limpiar");// creamos variable para almacenar el campo seleccionado por id
       buttonLimpiar.style.display = "none"; // tomamos la varible y con .style.display cambiamos el display="block" en CSS por display="none" mediante JS
}


// Funcion Oculta container__AreaTexto
//  function ocultarDiv(){
//      console.log("Click en ocultar")
//      let container = document.getElementsByClassName("container__AreaTexto")[0];
//     if(container.style.visibility == "hidden"){
//           container.style.visibility = "visible";
//      }else{
//           container.style.visibility = "hidden"
//         }

//  }
