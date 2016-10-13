var currentColor = "#000000"
var savedColors = [];
document.getElementById("save").addEventListener("click",saveColor);
document.getElementById("clear-button").addEventListener("click",clear);


document.getElementById("generate").addEventListener("click",function(){
  currentColor = generateColor();
  $("#screenWrapper").css("background-color",currentColor);
  $("#hex-value").html(currentColor);
});

function clear () {
  savedColors = [];
  $("#saved-box").html("");
}

function generateColor(){
  return '#' + Math.random().toString(16).slice(2, 8);
}

function saveColor() {
  if (currentColor == savedColors[savedColors.length-1]){
    return;
  }
  savedColors.push(currentColor);
  console.log("saving color...");
  $("#saved-box").html("");
  for (var i = 0; i < savedColors.length; i++){
    var myColor = savedColors[i];
    $("#saved-box").append('<div class="saved-color" style="background-color:'+myColor+';"></div>');
  }
}
