$(document).ready(function(){
  $('.list-save').on('click', function () {
    saveTaskList(this);
  });
});

function saveTaskList(listForm) {
  var listTitle = $('#new-list-title').val();
  var listDescription = $('#new-list-description').val();
  var data = {title: listTitle, description: listDescription};
  $.post("/api/v1/task_lists", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}
