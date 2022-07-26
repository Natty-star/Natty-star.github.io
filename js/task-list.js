const tasks = [];

if(localStorage.getItem("result")){
    const eachTask = localStorage.getItem("result").split(",");
        document.getElementById("textarea").value = ` ${eachTask} \n`;
        

}

console.log(tasks);
function addList(){
    const task = document.getElementById("task").value +'\n';
    if(task){
        document.getElementById("textarea").value += `${task} \n`;
     
        tasks = tasks + task;
        localStorage.setItem("result" ,tasks);
        //console.log(tasks)
    }
     
}

function clearList(){
    localStorage.removeItem("result");
    document.getElementById("textarea").value =  null;  
}