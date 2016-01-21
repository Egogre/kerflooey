function buildList(listID, listTitle, listDescription) {
  $('.task-lists').prepend(
    '<div class="task-list" data-id="' + listID + '">' +
      '<div class="list-info">' +
        '<h2>' + listTitle + '</h2>' +
        '<p>' + listDescription + '</p>' +
        '<button class="list-edit" data-id="' + listID + '">' +
          'Edit Task List' +
        '</button>' +
        '<button class="list-delete" data-id="' + listID + '">' +
          'Delete Task List' +
        '</button>' +
      '</div>' +
      '<div class="tasks">' +
        '<h4>Create A New Task:</h4>' +
        '<h4 class="task-list-errors"></h4>' +
        '<h5>Title:</h5>' +
        '<input type="text" class="new-task-title">' +
        '<h5>notes:</h5>' +
        '<textarea class="new-task-notes"></textarea>' +
        '<h5>Start Date:</h5>' +
        '<input type="date" class="start-date">' +
        '<h5>Due Date:</h5>' +
        '<input type="date" class="due-date">' +
        '<button class="add-task" data-id="' + listID + '">' +
          'Create New Task' +
        '</button>' +
      '</div>' +
    '</div>'
  );
}
