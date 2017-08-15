// Directory Link Animations
function colorChange1() {
  document.getElementById("link1").style.WebkitAnimation = "color_change_animation 1s infinite";
  document.getElementById("link1").style.animation = "color_change_animation 1s infinite";
}
function colorChange2() {
  document.getElementById("link2").style.WebkitAnimation = "color_change_animation 1s infinite";
  document.getElementById("link2").style.animation = "color_change_animation 1s infinite";
}
function colorChange3() {
  document.getElementById("link3").style.WebkitAnimation = "color_change_animation 1s infinite";
  document.getElementById("link3").style.animation = "color_change_animation 1s infinite";
}
function colorChange4() {
  document.getElementById("link4").style.WebkitAnimation = "color_change_animation 1s infinite";
  document.getElementById("link4").style.animation = "color_change_animation 1s infinite";
}
function normal1() {
  document.getElementById("link1").style.WebkitAnimation = "color_change_animation 5s infinite";
  document.getElementById("link1").style.animation = "color_change_animation 5s infinite";
}
function normal2() {
  document.getElementById("link2").style.WebkitAnimation = "color_change_animation 5s infinite";
  document.getElementById("link2").style.animation = "color_change_animation 5s infinite";
}
function normal3() {
  document.getElementById("link3").style.WebkitAnimation = "color_change_animation 5s infinite";
  document.getElementById("link3").style.animation = "color_change_animation 5s infinite";
}
function normal4() {
  document.getElementById("link4").style.WebkitAnimation = "color_change_animation 5s infinite";
  document.getElementById("link4").style.animation = "color_change_animation 5s infinite";
}

// Profile Blur
function unblur() {
  document.getElementById("profile").style.filter = "blur(0px)";
  document.getElementById("profile").style.Webkitfilter = "blur(0px)";
}

// Resume Zoom 
var hasBeenClicked = false;
function zoom() {
  if (!hasBeenClicked) {
    document.getElementById("resume").style.animation = "zoom 3s 1";
    document.getElementById("resume").style.WebkitAnimation = "zoom 3s 1"; /* Chrome, Safari, Opera */
    document.getElementById("resume").style.width = "650px";
    hasBeenClicked === true;
  }
  // else {
  //   document.getElementById("resume").style.animation = "zoom 3s 1";
  //   document.getElementById("resume").style.WebkitAnimation = "zoom 3s 1"; /* Chrome, Safari, Opera */
  //   document.getElementById("resume").style.width = "200px";
  //   hasBeenClicked === false;
  // }
}
