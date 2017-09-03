// TOGGLE FAVORITE BOOK LIST
function showBooks() {
  document.getElementById("bookList").style.display = "block";
  booksShown = true;
  document.getElementById("books").innerHTML = "Hide.";

  console.log("Show books");
}

function hideBooks() {
  document.getElementById('bookList').style.display = "none";
  booksShown = false;
  document.getElementById("books").innerHTML = "Show.";
  console.log("Hide books");
}

var booksShown = false;
function favBooks() {
  booksShown ? hideBooks() : showBooks();
}

// TOGGLE FAVORITE QUOTES
function showQuotes() {
  document.getElementById("quotes").style.display = "block";
  quotesShown = true;
  document.getElementById("quotesId").innerHTML = "Hide.";
}

function hideQuotes() {
  document.getElementById('quotes').style.display = "none";
  quotesShown = false;
  document.getElementById("quotesId").innerHTML = "Show.";
}

var quotesShown = false;
function favQuotes() {
  quotesShown ? hideQuotes() : showQuotes();
}

// Idaho Parallax
function showIdaho() {
  document.getElementById("idaho").style.opacity = "1";
}
function hideIdaho() {
  document.getElementById("idaho").style.opacity = "0";
}
// Text Color Change Animation
function colorChange() {
  document.getElementById("sarcasticColorChange").style.WebkitAnimation = "color_change_animation 1s infinite";
  document.getElementById("sarcasticColorChange").style.animation = "color_change_animation 1s infinite";
}
function slowColorChange() {
  document.getElementById("sarcasticColorChange").style.WebkitAnimation = "color_change_animation 5s infinite";
  document.getElementById("sarcasticColorChange").style.animation = "color_change_animation 5s infinite";
}
function normalColor() {
  document.getElementById("sarcasticColorChange").style.WebkitAnimation = "color_change_animation 0s 0";
  document.getElementById("sarcasticColorChange").style.animation = "color_change_animation 0s 0";
}

// Music Parallax
function showInstruments() {
  document.getElementById("oboe").style.visibility = "visible";
  document.getElementById("sax").style.visibility = "visible";
}
function hideInstruments() {
  document.getElementById("oboe").style.visibility = "hidden";
  document.getElementById("sax").style.visibility = "hidden";
}
function showInstrumentInfo() {
  document.getElementById("musicInfo").innerHTML = "I have been making music since the age of ten. Initially, I participated in my elementary school's orchestra program until I discovered my true passion lay in playing woodwinds. My instruents of choice today are the alto and tenor saxophone as well as the oboe and English Horn. I have participated in nearly every musical opportunity that my community has to offer: school programs such as concert band, symphonic band, STOMP percussion/perforance arts, pep band, marching band, advanced 0-hour jazz band, and the LCHS jazz combo, as well as external programs such as Coeur d'Alene Youth Orchestra, the 'Mataban Jazz Experience,' and the Perfection-Nots Marching Band. From Handel to Sousa to the Count Basie Big Band, music has always been and will continue to remain a significant influence on my life."
  document.getElementById("musicInfoDiv").style.background = "rgba(240,248,255,.92)";
  document.getElementById("musicCloseBtn").style.display = "block";
}
function removeInstrumentInfo() {
  document.getElementById("musicInfo").innerHTML = "";
  document.getElementById("musicInfoDiv").style.background = "rgba(0,0,0,0)";
  document.getElementById("musicCloseBtn").style.display = "none";
}

//Stem Parallax
function showSTEMInfo() {
  document.getElementById("STEMInfo").innerHTML = "As a member of the LCHS Scholastic Team, a mentor for Gizmo-CDA's \"Girls Who Code\" club and other coding events, a software engineering intern at ExtraTech Systems (initially starting through the University of Idaho's Dign'IT Tech Internship Program), a two year participant in UofI's \"Women in Math and Science\" event, and a lifelong lover of all things math and science, I work to promote STEM wherever possible. Plus, I absolutely adore XKCD comics.";
  document.getElementById("STEMInfoDiv").style.background = "rgba(240,248,255,.92)";
  document.getElementById("STEMCloseBtn").style.display = "block";
}
function removeSTEMInfo() {
  document.getElementById("STEMInfo").innerHTML = "";
  document.getElementById("STEMInfoDiv").style.background = "rgba(0,0,0,0)";
  document.getElementById("STEMCloseBtn").style.display = "none";
}

// Library Parallax
function showLibraryInfo() {
  document.getElementById("libraryInfo").innerHTML = "The public library has been a part of my life in one way or another since I was old enough to pick up a book. I have volunteered at the Coeur d'Alene library in an official capacity since the eighth grade. I am presently a member of the teen advisory board, essentially the 'Brain Trust' of library event hosting. I often help set up and supervise programs such as teen book clubs, creative writing clubs, crafting, Dungeons and Dragons (yes, you read that correctly), as well as maintaining order in its public makerspace, teen room, and of course the copious rows upon rows of bookshelves.";
  document.getElementById("libraryInfoDiv").style.background = "rgba(240,248,255,.92)";
  document.getElementById("libraryCloseBtn").style.display = "block";
}
function removeLibraryInfo() {
  document.getElementById("libraryInfo").innerHTML = "";
  document.getElementById("libraryInfoDiv").style.background = "rgba(0,0,0,0)";
  document.getElementById("libraryCloseBtn").style.display = "none";
}

// GS Parallax
function showGsInfo() {
  document.getElementById("gsInfo").innerHTML = "Going on my 11th year of girlscouting as of 2017, I take pride in serving my community and the people who help to make it so wonderful. Beyond cookie sales and camping trips, Troop 3003 focuses primarily on volunteer work. The girls in my troop and I take the lead on many events that support CDA: Arbor Day tree planting, donation collection for World Relief, food drives, and more. As a part of earning my Bronze and Silver service project awards, I recall sewing hundreds of stuffed teddy bears to send to soldiers fighting over seas in Afghanistan and constructing a playground for the children of the Union Gospel Mission, respectively. I hope to continue this tradition of community service in completing my Gold Award as a senior Girlscout.";
  document.getElementById("gsInfoDiv").style.background = "rgba(240,248,255,.92)";
  document.getElementById("gsCloseBtn").style.display = "block";
}
function removeGsInfo() {
  document.getElementById("gsInfo").innerHTML = "";
  document.getElementById("gsInfoDiv").style.background = "rgba(0,0,0,0)";
  document.getElementById("gsCloseBtn").style.display = "none";
}

// Robotics Parallax
function showRoboticsInfo() {
  document.getElementById("roboticsInfo").innerHTML = "I discovered the TeraViks robotics team #3145 in my freshman year of highschool. I've had a passion for progamming for years, but competing on a FIRST Robotics team was my first opportunity to apply that skill. As a member of the programming team, of which there were two, I used the Python scripting language to control our robot in teleop as well as autonomous periods of competition. An acronym meaning \"For Inspiration and Recognition of Science and Technology,\" FRC continues to have a positive influence on my life and fuel my aspirations to one day work in the field of computer science and technology.";
  document.getElementById("roboticsInfoDiv").style.background = "rgba(240,248,255,.92)";
  document.getElementById("roboticsCloseBtn").style.display = "block";
}
function removeRoboticsInfo() {
  document.getElementById("roboticsInfo").innerHTML = "";
  document.getElementById("roboticsInfoDiv").style.background = "rgba(0,0,0,0)";
  document.getElementById("roboticsCloseBtn").style.display = "none";
}

//Toggle Left Navigation background
var navBarOut = false;
function showLeftNavBar() {
  document.getElementById("leftNavBar").style.marginLeft = "-1px";
  document.getElementById("navTab").style.marginLeft = "110px";
  document.getElementById("navTab").innerHTML = "<";
  navBarOut = true;
}
function hideLeftNavBar() {
  document.getElementById("leftNavBar").style.marginLeft = "-140px";
  document.getElementById("navTab").style.marginLeft = "-45px";
  document.getElementById("navTab").innerHTML = ">";
  navBarOut = false;
}
function toggleNavBar() {
  navBarOut ? hideLeftNavBar() : showLeftNavBar();
}
//Navigation Bar Tab Move on Hover Effect
function navTabMove() {
  if (!navBarOut) {
    document.getElementById("navTab").style.marginLeft = "-20px";
    document.getElementById("navTab").style.cursor = "pointer";
    document.getElementById("leftNavBar").style.marginLeft = "-120px";
  }
  else {
    document.getElementById("navTab").style.marginLeft = "95px";
    document.getElementById("navTab").style.cursor = "pointer";
    document.getElementById("leftNavBar").style.marginLeft = "-15px";
  }
}
function navTabMoveBack() {
  if (!navBarOut) {
    document.getElementById("navTab").style.marginLeft = "-45px";
    document.getElementById("navTab").style.cursor = "default";
    document.getElementById("leftNavBar").style.marginLeft = "-140px";
  }
  else {
    document.getElementById("navTab").style.marginLeft = "110px";
    document.getElementById("navTab").style.cursor = "default";
    document.getElementById("leftNavBar").style.marginLeft = "-1px";
  }
}

// Change Background Color Randomly
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
function resetColorScheme() {
  document.body.style.backgroundColor = "#f0f8ff";
}

// GENERAL STRUCTURE OF TOGGLE CONTENT
// function showContent(is_shown_var, content, id) {
//   document.getElementById(content).style.display = "block";
//   is_shown_var = true;
//   document.getElementById(id).innerHTML = "Hide.";
//   console.log("Show");
// }
//
// function hideContent(is_shown_var, content, id) {
//   document.getElementById(content).style.display = "none";
//   is_shown_var = false;
//   document.getElementById(id).innerHTML = "Show.";
//   console.log("Hide");
// }
//
// var booksShown = false;
// var quotesShown = false;
//
// function toggleContent(is_shown_var, content, id) {
//   is_shown_var ? hideContent(content, id) : showContent(content, id);
// }

// DRAG AND DROP FUNCTIONALITY
// function allowDrop(ev) {
//     ev.preventDefault();
// }
//
// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }
//
// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }
