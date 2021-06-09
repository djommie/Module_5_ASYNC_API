const apiUrl = 'http://localhost:3000/';

async function getTask() {
    const response = await fetch(apiUrl, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    const tasks = await response.json();
    return tasks
}

function createTask(taskName) {
    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ description: taskName, done: false }),
        headers: {
            "Content-Type": "application/json",
        },
    })
};

async function printTasks() {
    if (task__list.innerHTML != '') {
        task__list.innerHTML = '';
    }
    console.log('printtask')
    const tasks = await getTask();
    await tasks.forEach(task => {
        task__list.innerHTML += `<li>${task.description}</li><button class='delete__btn' onclick="deleteTask('${task._id}')">Delete Task</button>`
    });
}

async function deleteTask(taskId) {
    console.log('delete')
    await fetch(apiUrl + taskId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    updateBtns();
    printTasks();
}

function createTaskButton() {
    const newTask = document.getElementById('task__input').value;
    if (newTask != '') {
        createTask(newTask);
        printTasks();
        updateBtns();
    } else {
        alert('Please enter new task')
    }
}

const createBtn = document.getElementById('task__button')

function updateBtns() {
    console.log('updatebtns')
    let btns = document.getElementsByClassName('delete__btn')
    Array.from(btns).forEach(btn => btn.addEventListener('click', printTasks))
}

createBtn.addEventListener('click', () => {
    createTaskButton();
})

document.addEventListener('DOMContentLoaded', () => {
    printTasks();
    updateBtns()
})