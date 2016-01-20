function buildList(listID, listTitle, listDescription) {
  $('.task-lists').prepend(
    '<div class="task-list" data-id="' + listID + '">' +
      '<h2>' + listTitle + '</h2>' +
      '<p>' + listDescription + '</p>' +
      '<button class="list-edit" data-id="' + listID + '">' +
        'Edit Task List' +
      '</button>' +
      '<button class="list-delete" data-id="' + listID + '">' +
        'Delete Task List' +
      '</button>' +
    '</div>'
  );
}
