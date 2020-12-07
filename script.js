const input = document.querySelector('#user_input');
const tasksList = document.querySelector('#tasks_list');


input.addEventListener('keypress', addNewTask)

function addNewTask(event) {
    if (input.value.length >  0  && event.keyCode === 13) {

        let task = document.createElement('li');
        task.innerHTML = input.value;
        tasksList.appendChild(task);
        input.value = '';
    }
}
