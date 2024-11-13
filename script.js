const inputBox= document.getElementById("input-box");
const listConatiner=document.getElementById("list");

function addtask(){
    if(inputBox.value===''){
        alert("write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listConatiner.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN" ){
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData(){
    localStorage.setItem("data",listConatiner.innerHTML);
}
function showlist(){
    listConatiner.innerHTML= localStorage.getItem("data");
}
showlist();

var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme")){
    icon.src = "images/moon.png";
    }else{
    icon.src = "images/sun.png";
    }
}
