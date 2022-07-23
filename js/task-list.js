//let test = [];
function addList(){
    const task = document.getElementById("task").value;
     document.getElementById("textarea").value += ` ${task} \n`;
     localStorage.setItem("result" ,task);
}
if(localStorage.getItem("result")){
    document.getElementById("textarea").value = localStorage.getItem("result");
}

function clearList(){
    localStorage.removeItem("result");
    document.getElementById("textarea").value =  null;  
}