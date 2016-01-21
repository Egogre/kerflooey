function updateTaskStatus(statusButton) {
  var taskID = $(statusButton).data('task');
  var $task = $('div[data-task="' + taskID +'"]');
  var currentStatus = $task.find('.status').text();
  var newStatus;
  if (currentStatus === "incomplete") {
    newStatus = "complete";
  } else {
    newStatus = "incomplete";
  }
  $.ajax({
    type: 'PATCH',
    url:  '/api/v1/tasks/' + taskID,
    data: {task: {status: newStatus}},
    error: function(response) {
      if (response.responseText) {
        showErrors(response);
      } else {
        userNotOwner();
      }
    },
    success: function(response){
      $task.find('.status').text(newStatus);
    }
  });
}
