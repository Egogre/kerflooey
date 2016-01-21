function fetchTaskLists() {
  $.ajax({
    type: 'GET',
    url:  '/api/v1/task_lists',
    success: function(response){
      loadTaskLists(response);
    }
  });
}

function loadTaskLists(response) {
  for (i = 0; i < response.length; i++) {
    var listID = response[i].id;
    var listTitle = response[i].title;
    var listDescription = response[i].description;
    buildList(listID, listTitle, listDescription);
  }
}
