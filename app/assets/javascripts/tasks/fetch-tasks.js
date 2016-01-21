function fetchTasks() {
  $.ajax({
    type: 'GET',
    url:  '/api/v1/tasks',
    success: function(response){
      loadTasks(response);
    }
  });
}

function loadTasks(response) {
  for (i = 0; i < response.length; i++) {
    var taskID = response[i].id;
    var taskTitle = response[i].title;
    var taskStatus = response[i].status;
    var taskNotes = response[i].notes;
    var taskStart = response[i].start;
    var taskDue = response[i].due;
    var taskListID = response[i].task_list_id;
    buildTask(taskID, taskTitle, taskStatus, taskNotes, taskStart, taskDue, taskListID);
  }
}
