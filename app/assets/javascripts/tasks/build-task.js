function buildTask(taskID, taskTitle, taskNotes, taskStart, taskDue, $tasks) {
  $tasks.prepend(
    '<div class="task" data-task="' + taskID + '">' +
      '<div class="task-info">' +
        '<h2>' + taskTitle + '</h2>' +
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
