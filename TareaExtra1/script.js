const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');

let total = 0;
let completed = 0;

function updateCounters() {
    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = total - completed;
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');

    span.addEventListener('click', () => {
        li.classList.toggle('completed');

        if (li.classList.contains('completed')) {
            completed++;
        } else {
            completed--;
        }
        updateCounters();
    });

    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        if (li.classList.contains('completed')) {
            completed--;
        }

        total--;
        taskList.removeChild(li);
        updateCounters();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    total++;
    updateCounters();

    taskInput.value = '';
});