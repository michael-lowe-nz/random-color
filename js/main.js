document.getElementById("button").addEventListener("click",function(){
  var color = generateColor();
  $("#screenWrapper").css("background-color",color);
  $("#hex-value").html(color);
});

function generateColor(){
  return '#' + Math.random().toString(16).slice(2, 8);
}
