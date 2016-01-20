function deleteTaskList(deleteButton) {
  var listID = $(deleteButton).data("id");
  var $taskList = $("div[data-id='" + listID + "']");

  $.ajax({
    type: 'DELETE',
    url:  '/api/v1/task_lists/' + listID,
    error: function(response) {
      userNotOwner();
    },
    success: function(response){
      $taskList.hide();
    }
  });
}
