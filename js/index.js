document.getElementById("buttonText").addEventListener("click", enviar);

function enviar(){
    let dato = document.getElementById("inputText").value; 
    
    localStorage.setItem("dato", dato);
}