function saveTaskList(listForm) {
  var listTitle = $('#new-list-title').val();
  var listDescription = $('#new-list-description').val();
  $.ajax({
    type: 'POST',
    url:  '/api/v1/task_lists',
    data: {task_list: {title: listTitle, description: listDescription}},
    error: function(response) {
      showErrors(response);
    },
    success: function(response){
      addList(response);
    }
  });
}

function showErrors(response) {
  clearErrors();
  $('.errors').scrollTop(0);
  var errors = JSON.parse(response.responseText).errors;
  for(var key in errors) {
    $errorsDiv.append('<li class="text-danger">' + key + " " + errors[key] + '</li>');
  }
}

function addList(response) {
  clearErrors();
  var listID = response.id;
  var listTitle = response.title;
  var listDescription = response.description;
  buildList(listID, listTitle, listDescription);
}
