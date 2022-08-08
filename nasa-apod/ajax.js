$(document).ready(function () {
  $("#view_button").click(getPicture);
});

var todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);

function getPicture() {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: {
      api_key: "DEMO_KEY",
      date: $("#date").val() ? $("#date").val() : todayDate,
    },
    dataType: "json",
    success: showPicture,
    error: noPicture,
  });
}
getPicture();

function showPicture(data) {
  $("#pic").attr("src", data.url);
  $("#title").text(data.title);
  console.log(data.title);
  console.log($("#date").val());
}
function noPicture(error) {
  alert(error.responseText);
}
