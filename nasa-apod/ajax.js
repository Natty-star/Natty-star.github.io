$(document).ready(function () {
  $("#view_button").click(getPicture);
});
var date = new Date().toLocaleDateString();
console.log(date);

function getPicture() {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: { api_key: "DEMO_KEY", date: $("#date").val() },
    dataType: "json",
    success: showPicture,
    error: noPicture,
  });
}

function showPicture(data) {
  $("#pic").attr("src", data.url);
  $("#title").text(data.title);
  console.log(data.title);
}
function noPicture(error) {
  alert(error.responseText);
}
