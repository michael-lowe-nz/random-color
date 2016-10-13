var currentColor = "#000000"
var savedColors = [];
document.getElementById("save").addEventListener("click",saveColor);
document.getElementById("clear-button").addEventListener("click",clear);
document.getElementById("generate").addEventListener("click",function(){
  changeColor()
});
document.getElementById("party").addEventListener("click",function(){
  setInterval(function(){changeColor();}, 100);
});

function changeColor(){
  currentColor = generateColor();
  var myElement = document.getElementById("screenWrapper");
  myElement.style.backgroundColor= currentColor;
  var myElement = document.getElementById("hex-value");
  console.log(myElement);
  myElement.innerHTML = currentColor;
}

// function changeColor(){
//   currentColor = generateColor();
//   $("#screenWrapper").css("background-color",currentColor);
//   $("#hex-value").html(currentColor);
// }

function clear () {
  savedColors = [];
  // $("#saved-box").html("");
  document.getElementById("saved-box").innerHTML = "";
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
