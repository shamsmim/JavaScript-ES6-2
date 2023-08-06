
var timer = setInterval(function() {
  var time = document.getElementById("timer");
  time.innerHTML = new Date().toLocaleTimeString();
}, 1000);
