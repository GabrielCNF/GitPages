let openModalTaskItem = null;

document.addEventListener('DOMContentLoaded', function () {
    closeModal();
}, false);

function createButton(text, clickHandler) {
    var button = document.createElement('button');
    button.textContent = text;
    button.onclick = clickHandler;
    return button;
}

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = taskInput.value;

        var removeButton = createButton('Remover', function() {
            removeTask(li);
        });

        var editButton = createButton('Editar', function() {
            openModal(li);
        });

        var completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.onchange = function() {
            toggleTaskComplete(li, completeCheckbox.checked);
        };

        li.appendChild(completeCheckbox);
        li.appendChild(removeButton);
        li.appendChild(editButton);

        taskList.appendChild(li);

        taskInput.value = '';
    } else {
        alert('Escreva uma tarefa pelo menos');
    }
}

function openModal(taskItem) {
    if (openModalTaskItem) {
        closeModal();
    }

    var editModal = document.getElementById('editModal');
    var editTaskDetails = document.getElementById('editTaskDetails');

    editTaskDetails.value = taskItem.textContent;

    var rect = taskItem.getBoundingClientRect();
    editModal.style.top = rect.bottom + 'px';
    editModal.style.left = window.innerWidth / 2 - editModal.offsetWidth / 2 + 'px';

    var saveButton = document.querySelector('#editModal button');
    saveButton.onclick = function() {
        saveTaskDetails(taskItem, editTaskDetails.value);
        closeModal();
    };

    editModal.style.display = 'block';

    openModalTaskItem = taskItem;
}

function saveTaskDetails(taskItem, details) {
    var detailsSpan = taskItem.querySelector('.details');

    if (!detailsSpan) {
        detailsSpan = document.createElement('span');
        detailsSpan.classList.add('details');
        taskItem.appendChild(detailsSpan);
    }

    detailsSpan.textContent = details;

    taskItem.classList.add('edited');
}

function closeModal() {
    var editModal = document.getElementById('editModal');
    editModal.style.display = 'none';

    openModalTaskItem = null;
}

function removeTask(taskItem) {
    var ul = taskItem.parentNode;
    ul.removeChild(taskItem);
}

function showDetails(taskItem) {
    var edited = taskItem.getAttribute('data-edited');
    if (edited === 'true') {
        alert('Detalhes da Tarefa: ' + taskItem.textContent);
    } else {
        alert('Esta tarefa ainda não foi editada.');
    }
}

function toggleTaskComplete(taskItem, isComplete) {
    var buttons = taskItem.querySelectorAll('button');
    var textArea = taskItem.querySelector('textarea');

    if (isComplete) {
        taskItem.classList.add('completed');
    } else {
        taskItem.classList.remove('completed');
    }

    if (isComplete) {
        buttons.forEach(function(button) {
            button.disabled = true;
        });
        textArea.style.textDecoration = 'line-through';
    } else {
        buttons.forEach(function(button) {
            button.disabled = false;
        });
        textArea.style.textDecoration = 'none';
    }
}