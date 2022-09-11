
let input=document.getElementById("input");
let liste=document.getElementById("liste");

let hell=true;



function add() {
    let div=document.createElement("div");



    
   

let icon=document.createElement("i");
icon.classList.add("fa-solid","fa-xmark");
let span=document.createElement("span");
span.innerHTML+=input.value+"<br>";
input.value="";
let icon2=document.createElement("i");
icon2.classList.add("fa-solid","fa-check");

div.appendChild(icon);
div.appendChild(span);
div.appendChild(icon2);

liste.appendChild(div);
    
if (hell) {
    div.style.backgroundColor="rgb(63, 143, 143)";
    hell=!true;
} else {

    div.style.backgroundColor="rgb(66, 185, 185)";
hell=true;

    
}
   
    
}