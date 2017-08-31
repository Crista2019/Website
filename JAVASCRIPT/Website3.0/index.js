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
    document.getElementById("resume").style.width = '80%';
    hasBeenClicked === true;
  }
  // else {
  //   document.getElementById("resume").style.animation = "zoom 3s 1";
  //   document.getElementById("resume").style.WebkitAnimation = "zoom 3s 1"; /* Chrome, Safari, Opera */
  //   document.getElementById("resume").style.width = "200px";
  //   hasBeenClicked === false;
  // }
}
// Adjust the color pallete for chem essay (I am too indecisive to assign one definitively, anyway)
var randColor;
function colorSchemeShift() {
  function color() {
    var hexadecimal = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hexadecimal)).substr(-2)
  }
  randColor = "#"+color()+color()+color();
  // console.log(randColor);
  document.body.style.backgroundColor = randColor;
}

var currentFontSize = "xx-small";

function mediumFont() {
  var x = document.querySelectorAll("p");
  for (var i=0; i < x.length; i++) {
    x[i].style.fontSize = "18px";
  }
  currentFontSize = "xx-medium";
}
S
function largeFont() {
  var x = document.querySelectorAll("p");
  for (var i=0; i < x.length; i++) {
    x[i].style.fontSize = "21px";
  }
  currentFontSize = "xx-large";
}

function smallFont() {
  var x = document.querySelectorAll("p");
  for (var i=0; i < x.length; i++) {
    x[i].style.fontSize = "15px";
  }
  currentFontSize = "xx-small";
}

function hugeFont() {
  var x = document.querySelectorAll("p");
  for (var i=0; i < x.length; i++) {
    x[i].style.fontSize = "25px";
  }
  currentFontSize = "xx-bigly";
}

function increaseFontSize() {
  switch (currentFontSize) {
    case "xx-small":
      mediumFont();
    break;
    case "xx-medium":
      largeFont();
    break;
    case "xx-large":
      hugeFont();
    break;
    default:
      hugeFont();
    break;
  }
}

function decreaseFontSize() {
  switch (currentFontSize) {
    case "xx-bigly":
      largeFont();
    break;
    case "xx-large":
      mediumFont();
    break;
    case "xx-medium":
      smallFont();
    break;
    default:
      smallFont();
    break;
  }
}

// Hide Obnoxious Directory Content
function dir_hide() {
  document.getElementById("down").style.display = "block";
  document.getElementById("directory_text").style.display = "none";
  // document.getElementById("dir_links").style.visibility = "hidden";
  // document.getElementById("directory").style.visibility = "hidden";
}

function dir_show() {
  document.getElementById("down").style.display = "none";
  document.getElementById("directory_text").style.display = "block";
  // document.getElementById("dir_links").style.visibility = "visible";
  // document.getElementById("directory").style.visibility = "visible";
}
