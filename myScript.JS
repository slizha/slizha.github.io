function click_handler(){
  console.log("In handler");
  $("#output").html("Hello");
  var x = $("#pass").val()
}
$("#git").on("click", click_handler);
