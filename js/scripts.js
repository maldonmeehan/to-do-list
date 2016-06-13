
// Object constructor for to do list tasks
function ListItem(description) {
    this.item = description;
}

$(document).ready(function(){

  $("#new-list").submit(function(event){
    event.preventDefault();

    var userInputtedTask = $("#new-list-item").val();

    var newUserList = new ListItem(userInputtedTask);

    $("ul#list-items").prepend("<div class='list-container sortable'><li><span class='to-do-item'>" + newUserList.item + "</span><input type='text' class='edit-item'></input></li>" + "<button class='remove-item btn btn-danger'>X</button>" + " " + "<button class='complete-item btn btn-success'>✓</button></div>");

    // Remove task from to do list

    $(".remove-item").click(function(){
      $(this).parent().remove();
    });

    // Mark task as completed on to do list
    $(".complete-item").click(function(){
      //$(this).last().toggleClass("completed");
      $(this).parent().children("li").addClass("completed");
    });

    // Edit task on to do list
    $(".to-do-item").click(function(){
      $(this).hide().siblings('.edit-item').show().val($(this).text()).focus();

      $(".edit-item").focusout(function(){
        $(this).hide().siblings(".to-do-item").show().text($(this).val());
      });


    });
    // Reorder tasks on to do list
       $( "#sortable-list" ).sortable({
          items: '.sortable'
       });
       $("#new-list")[0].reset();
  });
});
