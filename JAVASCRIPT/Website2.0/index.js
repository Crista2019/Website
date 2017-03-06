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
