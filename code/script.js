// A function that adds and remove the class "active" on the section you click on.
function toggleClass() {
  this.classList.toggle("active")
  }


// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("sectionOne").onclick = toggleClass
document.getElementById("sectionTwo").onclick = toggleClass
document.getElementById("sectionThree").onclick = toggleClass

// // text icon - expand collaps
