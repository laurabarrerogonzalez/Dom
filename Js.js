// DOM1 Haya texto y un botón que permita modificar ese texto

// function modificarTexto() {
//     var elemento = document.getElementById("texto");
//     elemento.innerHTML = "Texto modificado";
//   }



// DOM2  Haya texto y un botón que permita cambiar el color del texto

// function modificarColor() {
//     let element =document.getElementById("holamundo");
//     element.style.color = 'red' ;
// }



// DOM3  Haya texto y un botón que permita subrayar el texto

// function subrayar() {
//     let element = document.getElementById("texto");
//     element.style.textDecoration = 'underline';
// }



// DOM4 Haya texto y un botón que permita ocultar el texto

// function hiddenText() {
//     let element = document.getElementById("text");
//     element.style.display = 'none';
// }



// // DOM5  Haya texto y un mismo botón que haga alternar el texto entre subrayado y no subrayado

// function underline() {
//     let element = document.getElementById("text");
//     element.classList.toggle("underline");
// }



// // DOM6 Haya texto y un mismo botón que permita alternar el texto entre oculto y no oculto

// function hiddenText() {
//     let element = document.getElementById("text");
//     element.classList.toggle("hidden");
// }



// // DOM7 Haya un recuadro y un botón que permita crear una caja dentro de ese recuadro una vez
// let boxAdded = false

// function addBox() {
//     if (!boxAdded) {
//       let element = document.getElementById("container");
//       let box = document.createElement("div");

//       box.style.width = "70px";
//       box.style.height = "70px";
//       box.style.backgroundColor = "pink";
//       box.style.margin = "10px";

//       element.appendChild(box);
//       boxAdded = true;
//     }

// }




// DOM8 Haya un recuadro y un botón que permita crear una caja dentro de ese recuadro tantas veces como se quiera

// function addBoxes() {
//     let element = document.getElementById("container");
//     let box = document.createElement("div");

//     box.style.width = "70px";
//     box.style.height = "70px";
//     box.style.backgroundColor = "purple";
//     box.style.margin = "10px";

//     element.appendChild(box);

// }



 // DOM9 Haya un recuadro y un botón que permita crear una caja dentro de ese recuadro hasta cinco veces máxim
    
// let counter = 0;

// function addFiveBoxes() {
//   let container = document.querySelector('#container');

//   if (counter < 5) {
//     let box = document.createElement('div');
//     box.className = 'box';
//     container.appendChild(box);
//     counter++;

//     if (counter === 5) {
//       let createBtn = document.querySelector('button');
//       createBtn.disabled = true;
//     }
//   }
// }



// // DOM10 Haya un recuadro, un botón que permita crear cajas dentro de ese recuadro y otro botón que permita eliminarlas, de una en una

// // Obtener referencias a los elementos
// const container = document.getElementById("container");
// const addBoxButton = document.getElementById("add-box-btn");
// const removeBoxButton = document.getElementById("remove-box-btn");

// // Manejador de evento para agregar una caja
// addBoxButton.addEventListener("click", () => {
//     const box = document.createElement("div");
//     box.classList.add("box");
//     container.appendChild(box);
// });

// // Manejador de evento para eliminar una caja
// removeBoxButton.addEventListener("click", () => {
//     const boxes = container.getElementsByClassName("box");
//     if (boxes.length > 0) {
//         container.removeChild(boxes[boxes.length - 1]);
//     }
// });



// DOM 11 Haya un formulario con un campo, una caja y un botón. El botón deberá crear el contenido del formulario dentro de la caja

// function agregarTexto() {
//     let texto = document.getElementById("texto").value;
//     let box = document.getElementById("Box");

//     let nuevoParrafo = document.createElement("p");
//     let textoNodo = document.createTextNode(texto);
//     nuevoParrafo.appendChild(textoNodo);

//     box.appendChild(nuevoParrafo);
//     document.getElementById("nombre").value = "";

// }


// DOM12 Haya un formulario con tres campos, una caja y un botón. El botón deberá crear el contenido de los tres campos dentro de la caja, a la vez


