
// Object constructor for to do list tasks
function ListItem(description) {
    this.item = description;
}

$(document).ready(function(){
  $("#new-list").submit(function(event){
    event.preventDefault();
    var userInputtedTask = $("#new-list-item").val();
    if (userInputtedTask === "") {
      alert("Please fill out field before submitting.");
      return false;
    }
    var newUserList = new ListItem(userInputtedTask);
    
    $("ul#list-items").prepend("<div class='list-container sortable'><li><span class='to-do-item'>" + newUserList.item + "</span><input type='text' class='edit-item'></input></li>" + "<button class='remove-item btn btn-danger btn-lg'>X</button>" + " " + "<button class='complete-item btn btn-success btn-lg'>✓</button></div>");

    $(".remove-item").click(function(){
      $(this).parent().remove();
    });

    $(".complete-item").click(function(){
    $(this).parent().children("li").addClass("completed");
    });

    $(".to-do-item").click(function(){
      $(this).hide().siblings('.edit-item').show().val($(this).text()).focus();

      $('.edit-item').keypress(function(e){
        if(e.which == 13){
          $(this).hide().siblings(".to-do-item").show().text($(this).val());
          }
        });
        $(".edit-item").focusout(function(){
        $(this).hide().siblings(".to-do-item").show().text($(this).val());
      });
    });

    $( "#sortable-list" ).sortable({
      items: '.sortable'
    });
    $("#new-list")[0].reset();
  });
});
