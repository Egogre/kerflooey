function editTask(taskButton) {
  var taskID = $(taskButton).data("task");
  var $task = $("div[data-task='" + taskID + "']");
  var taskCurrentTitle = $task.find('h3').text();
  var taskCurrentNotes = $task.find('.task-notes').text();
  var taskCurrentStart = $task.find('.task-start').text();
  var taskCurrentDue = $task.find('.task-due').text();
  $task.prepend(buildTaskEditArea(taskID));
  $task.find('.edit-task-title').val(taskCurrentTitle);
  $task.find('.edit-task-notes').val(taskCurrentNotes);
  $task.find('.edit-task-start').val(taskCurrentStart);
  $task.find('.edit-task-due').val(taskCurrentDue);
}

function buildTaskEditArea(taskID) {
  return '<div class="edit-task-window" data-task="' + taskID + '"><br>' +
            '<input type="text" class="edit-task-title"><br>' +
            '<textarea class="edit-task-notes"></textarea>' +
            '<h5>Start Date:</h5>' +
            '<input type="date" class="edit-start-date">' +
            '<h5>Due Date:</h5>' +
            '<input type="date" class="edit-due-date">' +
            '<button class="edit-task-update" data-task="' + taskID + '">update</button>' +
            '<button class="close-task-edit-window" data-task="' + taskID + '">close</button>' +
          '</div>';
}

function submitEditTask(submitButton) {
  var taskID = $(submitButton).data("task");
  var $task = $("div[data-task='" + taskID + "']");
  var newTitle = $task.find('.edit-task-title').val();
  var newNotes = $task.find('.edit-task-notes').val();
  var newStart = $task.find('.edit-start-date').val();
  var newDue = $task.find('.edit-due-date').val();

  patchTask(taskID, newTitle, newNotes, newStart, newDue, $task);
}

function patchTask(taskID, newTitle, newNotes, newStart, newDue, $task) {
  $.ajax({
    type: 'PATCH',
    url:  '/api/v1/tasks/' + taskID,
    data: {task: {title: newTitle, notes: newNotes, start: newStart, due: newDue}},
    error: function(response) {
      if (response.responseText) {
        showErrors(response);
      } else {
        userNotOwner();
      }
    },
    success: function(response){
      updateTask($task, newTitle, newNotes, newStart, newDue);
    }
  });
}

function updateTask($task, newTitle, newNotes, newStart, newDue) {
  $task.find('.edit-task-window').hide();
  $task.find('h3').text(newTitle);
  $task.find('.task-notes').text(newNotes);
  $task.find('.task-start').text(newStart);
  $task.find('.task-due').text(newDue);
}

function closeTaskEditWindow(closeButton) {
  var taskID = $(closeButton).data("task");
  var $task = $("div[data-task='" + taskID + "']");
  $task.find('.edit-task-window').hide();
}
