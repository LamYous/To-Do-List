

// create tasks
let tasks;
if(localStorage.task != null){
    tasks = JSON.parse(localStorage.task)
}else{
    tasks = []
} 

function fillTasksOnThePage() {

    document.getElementById("tasks").innerHTML = ""
    index = 0
    for (task of tasks) {
        let content = `
            <div class="task ${task.isDone ? 'done' : ''}" style="direction: rtl">
                <!-- INFO -->
                <div style="width: 70%;">
                    <div>
                        <h2> ${task.title} </h2>
                        <div>
                            <span>
                                <i class="fa-solid fa-calendar-days"></i>
                            </span>
                            <span>
                                ${task.date}
                            </span>
                        </div>
                    </div>
                </div>
                <!-- ACTIONS -->
                <div style="display: flex; align-items: center; justify-content: space-between; width: 20%;">
                    <button onclick = "deleteTask(${index})" class="btn" style="background-color: rgb(237, 80, 80); color: white;"><i
                            class="fa-solid fa-trash"></i></button>

                    ${task.isDone ? `
                        <button onclick="togleTaskCompletion(${index})" class="btn" style="background-color: red;color: white;"><i class="fa-solid fa-ban"></i></button>
                        ` : `
                        <button onclick="togleTaskCompletion(${index})" class="btn" style="background-color: green;color: white;"><i class="fa-solid fa-check"></i></button>
                        `}
                    

                    <button onclick="editTask(${index})" class="btn" style="background-color: rgb(70, 70, 255); color: white;">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </div>
            `
        document.getElementById("tasks").innerHTML += content
        index++
    }
}

fillTasksOnThePage()

document.getElementById("addBtn").addEventListener("click", function(){
    let taskName = prompt(":الرجاء إدخال عنوان المهمة");
    let now = new Date()
    let date = now.getDay() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " | " + now.getHours() + ":" + now.getMinutes()
    taskObj = {
        "title": taskName,
        "date": date,
        "isDone": false
    }
    tasks.push(taskObj)
    localStorage.setItem("task",JSON.stringify(tasks))
    fillTasksOnThePage()
})

function deleteTask(index) {
    let isConfirmed = confirm("Are You Shure, you want to delete: '" + task.title + "'")
    if (isConfirmed) {
        tasks.splice(index, 1)
        localStorage.task = JSON.stringify(tasks)
        fillTasksOnThePage()
    }
}

function editTask(index) {
    let task = tasks[index]
    let updateTask = prompt("", task.title)

    task.title = updateTask
    localStorage.setItem("task",JSON.stringify(tasks))
    fillTasksOnThePage()
}
    
function togleTaskCompletion(index) {
    let task = tasks[index]
    if (task.isDone) {
        task.isDone = false
    } else {
        task.isDone = true
    }
    /* ikhtisar:
        task.isDone = !task.isDone */
        localStorage.setItem("task",JSON.stringify(tasks))
    fillTasksOnThePage()
}

function storeTasks() {
    let tasksStoring = JSON.stringify(tasks)
    localStorage.setItem("tasks", tasksStoring)
}