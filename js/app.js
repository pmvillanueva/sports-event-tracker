$(document).ready(function() {
  $(".js-event-form").submit(function(event){
    event.preventDefault();

  var sportsEvent = $("#sports-event").val();
  var date = $("#date").val();
  var location = $("#location").val();

  $(".events").append(sportsEvent, date, location);

//$("#event-results").append($("<li>").text(sportsEvent));
//$("#event-results").append($("<li>").text(date));
//$("#event-results").append($("<li>").text(location));

/*function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = sportsEvent;
    cell2.innerHTML = date;
    cell3.innerHTML = location;
}*/


  $("#sports-event").val("");
  $("#date").val("");
  $("#location").val("");

  });


});
