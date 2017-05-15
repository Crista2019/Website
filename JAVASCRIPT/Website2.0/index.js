/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function who() {
  document.getElementById("who").innerHTML =
  "Crista Falk; Homo Sapien";
}

function what() {
  document.getElementById("what").innerHTML =
  "Interests/Hobbies: Volunteering at the Library, Scholastic Team, Saxophone, Oboe, Coding, Robotics, Girlscouting";
  document.getElementById("favorites").innerHTML =
  "Favorite Books: Hitchhiker's Guide to the Galaxy, To Kill a Mockingbird, The Princess Bride, Slaughter House-Five, The Catcher in the Rye";
}


function where() {
  document.getElementById("where").innerHTML =
  "US Pacific Northwest";
}

/*
var butterfly_1 = "http://i.imgur.com/NbEPukX.jpg";
var butterfly_2 = "http://i.imgur.com/sBVlsbl.jpg";
var butterfly_3 = "http://i.imgur.com/NnacQ2x.jpg";
var butterfly_4 = "http://i.imgur.com/95urvpA.jpg";
var butterflies = [butterfly_1, butterfly_2, butterfly_3, butterfly_4];
var butterfly_index = 0;

// Butterfly images
function butterfly() {
  if (butterfly_index < 5) {
    butterfly_index ++;
  }
  else {
    butterfly_index = 0;
  }
  document.getElementById("bufly").innerHTML =
    butterflies[butterfly_index];
}*/

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
