$(document).ready(function () {
  $("#view_button").click(getPicture);
});

var inputDate = $("#date").val();
var todayDate = new Date().toISOString().slice(0, 10);

function getPicture() {
  fetch(
    "https://api.nasa.gov/planetary/apod?" +
      new URLSearchParams({
        api_key: "DEMO_KEY",
        date: inputDate,
      })
  )
    .then((data) => data.json())
    .then((data) => {
      $("#pic").attr("src", data.url);
      $("#title").text(data.title);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.message);
    });
}
