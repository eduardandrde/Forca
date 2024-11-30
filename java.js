const abrirModal = document.getElementById("abrirModal");
const modalContainer = document.getElementById("modalContainer");
const buttonFechar = document.getElementById("buttonFechar");

abrirModal.addEventListener("click",()=>{
    modalContainer.classList.add("aparecer");
});
buttonFechar.addEventListener("click",()=>{
    modalContainer.classList.remove("aparecer");
});





      