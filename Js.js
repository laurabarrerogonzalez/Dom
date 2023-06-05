// DOM1
// function modificarTexto() {
//     var elemento = document.getElementById("texto");
//     elemento.innerHTML = "Texto modificado";
//   }

// DOM2
// function modificarColor() {
//     let element =document.getElementById("holamundo");
//     element.style.color = 'red' ;
// }


// DOM3
// function subrayar() {
//     let element = document.getElementById("texto");
//     element.style.textDecoration = 'underline';
// }


// DOM4
// function hiddenText() {
//     let element = document.getElementById("text");
//     element.style.display = 'none';
// }


// // DOM5
// function underline() {
//     let element = document.getElementById("text");
//     element.classList.toggle("underline");
// }


// // DOM6
// function hiddenText() {
//     let element = document.getElementById("text");
//     element.classList.toggle("hidden");
// }



// // DOM7
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


// DOM8
// function addBoxes() {
//     let element = document.getElementById("container");
//     let box = document.createElement("div");

//     box.style.width = "70px";
//     box.style.height = "70px";
//     box.style.backgroundColor = "purple";
//     box.style.margin = "10px";

//     element.appendChild(box);

// }


// DOM9
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


// // DOM10

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