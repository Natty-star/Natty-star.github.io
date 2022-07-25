const tasks = [];
if(localStorage.getItem("result")){
    const eachTask = localStorage.getItem("result").split(",");
    for (let index = 0; index < eachTask.length; index++) {
        document.getElementById("textarea").value = `${eachTask} \n`;
        tasks.push(eachTask);
    }
}

console.log(tasks);
function addList(){
    const task = document.getElementById("task").value;
    if(task){
        document.getElementById("textarea").value += ` ${task} \n`;
     
        tasks.push(task); 
        localStorage.setItem("result" ,tasks);
        //console.log(tasks)
    }
     
}

function clearList(){
    localStorage.removeItem("result");
    document.getElementById("textarea").value =  null;  
}