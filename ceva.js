const buton = document.getElementById("btnSubmit");//imi fac o constanta buton care reprezinta submit si apeleaza addtask daca il apas
const tasks = document.getElementById("tasks");//constanta task care gestioneaza lista de taskuri pe care o bag
const mesaj = document.getElementById("message");//constanta care imi afiseaza mesaj cand lista e goala sau bag un input gresit
const clear = document.getElementById("btnClear");//o sa curat lista de taskuri

buton.addEventListener("click", addtask);
tasks.addEventListener("click", handletask);
clear.addEventListener("click", clearlist);

display("Nimic pe ziua de azi fugi la bere!");

function clearlist(){
    const list = document.getElementsByClassName("list-group-item");
    while(list.length != 0)
        list[0].parentNode.removeChild(list[0]);
    display("Nimic pe ziua de azi fugi la bere!");
}

function addtask(){
    const newTask = document.getElementById("newTask");
    if(validinput(newTask.value)){
        tasks.innerHTML +=`<li class="list-group-item">${newTask.value}</li>`;
        mesaj.style.visibility = "hidden";
        newTask.value = "";
    }
    else display("Baga un task man nu fi taran!");
}

function handletask(event){
    const style = event.target.style;
    if(!style.textDecoration)
        style.textDecoration = "line-through";
    else style.textDecoration = "";
}

function validinput(input){
    if(input) 
        return true;
    else 
        return false;
}

function display(message){
    mesaj.style.visibility = "visible";
    mesaj.innerText = message;
}