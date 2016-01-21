function buildTask(taskID, taskTitle, taskStatus, taskNotes, taskStart, taskDue, taskListID) {
  var $tasks = $("div[data-id='" + taskListID + "']").find('.tasks');
  $tasks.prepend(
    '<div class="task" data-task="' + taskID + '">' +
      '<div class="task-info">' +
        '<h3>' + taskTitle + '</h3>' +
        '<h4 class="status">' + taskStatus + '</h4>' +
        '<button class="task-status" data-task="' + taskID + '">' +
          'Update Status' +
        '</button>' +
        '<p class="task-notes">' + taskNotes + '</p>' +
        '<p>start date:</p>' +
        '<p class="task-start">' + taskStart + '</p>' +
        '<p>due date:</p>' +
        '<p class="task-due">' + taskDue + '</p>' +
        '<button class="task-edit" data-task="' + taskID + '">' +
          'Edit Task' +
        '</button>' +
        '<button class="task-delete" data-task="' + taskID + '">' +
          'Delete Task' +
        '</button>' +
      '</div>' +
    '</div>'
  );
}
