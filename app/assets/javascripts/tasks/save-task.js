function saveTask(taskForm) {
  var listID = $(taskForm).data("id");
  var $tasks = $("div[data-id='" + listID + "']").find('.tasks');
  var taskTitle = $tasks.find('.new-task-title').val();
  var taskNotes = $('.new-task-notes').val();
  var taskStartDate = $('.start-date').val();
  var taskDueDate = $('.due-date').val();

  $.ajax({
    type: 'POST',
    url:  '/api/v1/tasks',
    data: {task: {title: taskTitle,
                  notes: taskNotes,
                  start: taskStartDate,
                  due: taskDueDate,
                  task_list_id: listID}},
    error: function(response) {
      showTaskErrors($tasks, response);
    },
    success: function(response){
      addTask($tasks, response);
      clearTaskFields($tasks);
    }
  });
}

function showTaskErrors($tasks, response) {
  clearTaskErrors($tasks);
  var $taskErrors = $tasks.find('.task-list-errors');
  $taskErrors.scrollTop(0);
  var errors = JSON.parse(response.responseText).errors;
  for(var key in errors) {
    $taskErrors.append('<li class="text-danger">' + key + " " + errors[key] + '</li>');
  }
}

function addTask($tasks, response) {
  clearTaskErrors($tasks);
  var taskID = response.id;
  var taskTitle = response.title;
  var taskStatus = response.status;
  var taskNotes = response.notes;
  var taskStart = response.start;
  var taskDue = response.due;
  var taskListID = response.task_list_id;
  buildTask(taskID, taskTitle, taskStatus, taskNotes, taskStart, taskDue, taskListID);
}

function clearFields() {
  $('#new-list-title').val("");
  $('#new-list-description').val("");
}

function clearTaskErrors ($tasks) {
  var $taskErrors = $tasks.find('.task-list-errors');
  $taskErrors.html('');
}
