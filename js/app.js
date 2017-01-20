$(document).ready(function() {
  $(".js-event-form").submit(function(event){
    event.preventDefault();

    var sportsEvent = $("#sports-event").val();
    var date = $("#date").val();
    var location = $("#location").val();

    $(".events-list").append(`<div class="event-row"><div class="event-name">${sportsEvent}</div>  <div class="event-date">${date}</div> <div class="event-location">${location}</div> <button class="delete-button" type="submit">Delete</button></div>`);

    $("#sports-event").val("");
    $("#date").val("");
    $("#location").val("");

    $(".event-row").click(function() {
      console.log("hello");
      $(this).find("div").toggleClass("event-past");

    });

    $(".delete-button").click(function() {
      console.log("delete-button-clicked");
      $(this).closest(".event-row").remove();

    });

  });



});
