function editTaskList(listButton) {
  var listID = $(listButton).data("id");
  var $taskList = $("div[data-id='" + listID + "']");
  var listCurrentTitle = $taskList.find('h2').text();
  var listCurrentDescription = $taskList.find('p').text();
  $taskList.append(buildEditArea(listID));
  $taskList.find('.edit-list-title').val(listCurrentTitle);
  $taskList.find('.edit-list-body').val(listCurrentDescription);
}

function buildEditArea(listID) {
  return '<div class="edit-window" data-id="' + listID + '"><br>' +
            '<input type="text" class="edit-list-title"><br>' +
            '<textarea class="edit-list-body"></textarea>' +
            '<button class="edit-update" data-id="' + listID + '">update</button>' +
            '<button class="close-edit-window" data-id="' + listID + '">close</button>' +
          '</div>';
}

function submitEditTaskList(submitButton) {
  var listID = $(submitButton).data("id");
  var $taskList = $("div[data-id='" + listID + "']");
  var newTitle = $taskList.find('.edit-list-title').val();
  var newDescription = $taskList.find('.edit-list-body').val();

  patchList(listID, newTitle, newDescription, $taskList);
}

function patchList(listID, newTitle, newDescription, $taskList) {
  $.ajax({
    type: 'PATCH',
    url:  '/api/v1/task_lists/' + listID,
    data: {task_list: {title: newTitle, description: newDescription}},
    error: function(response) {
      userNotOwner();
    },
    success: function(response){
      updateList($taskList, newTitle, newDescription);
    }
  });
}

function updateList ($taskList, newTitle, newDescription) {
  $taskList.find('.edit-window').hide();
  $taskList.find('h2').text(newTitle);
  $taskList.find('p').text(newDescription);
}

function closeEditWindow(closeButton) {
  var listID = $(closeButton).data("id");
  var $taskList = $("div[data-id='" + listID + "']");
  $taskList.find('.edit-window').hide();
}
