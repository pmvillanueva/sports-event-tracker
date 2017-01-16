$(function() {
  $(".js-event-form").submit(function(event){
    event.preventDefault();

  var sportsEvent = $("#sports-event").val();
  var date = $("#date").val();
  var location = $("#location").val();

  $(".events").append(sportsEvent, date, location);


  $("#sports-event").val("");
  $("#date").val("");
  $("#location").val("");

  });


});
