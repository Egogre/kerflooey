$(document).ready(function(){
  $errorsDiv = $('.errors');
  $taskLists = $('.task-lists');

//////////////TASK LISTS

  $('.list-save').on('click', function () {
    saveTaskList(this);
  });

  $taskLists.on('click', '.list-edit', function(){
    editTaskList(this);
  });

  $taskLists.on('click', '.edit-update', function(){
    submitEditTaskList(this);
  });

  $taskLists.on('click', '.close-edit-window', function(){
    closeEditWindow(this);
  });

  $taskLists.on('click', '.list-delete', function(){
    deleteTaskList(this);
  });

////////////////////TASKS

  $taskLists.on('click', '.add-task', function(){
    saveTask(this);
  });

  $taskLists.on('click', '.task-status', function(){
    updateTaskStatus(this);
  });

  $taskLists.on('click', '.task-edit', function(){
    editTask(this);
  });

  $taskLists.on('click', '.edit-task-update', function(){
    submitEditTask(this);
  });

  $taskLists.on('click', '.task-delete', function(){
    deleteTask(this);
  });

  fetchTaskLists();
  fetchTasks();
});

var $errorsDiv;

function clearErrors() {
  $errorsDiv.html('');
}

function userNotOwner() {
  $errorsDiv.html('<li class="text-danger">You must be the owner to edit or delete.</li>');
}
