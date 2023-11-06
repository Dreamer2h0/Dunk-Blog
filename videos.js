// Get the container element for the navbar menu
var navbarContent = document.getElementById("navbarSupportedContent");

// Get all buttons with class "nav-link" inside the navbar container
var navbarItems = navbarContent.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener("click", function() {
    // Remove the "active" class from all items
    for (var j = 0; j < navbarItems.length; j++) {
      navbarItems[j].classList.remove("active");
    }
    // Add the "active" class to the clicked item
    this.classList.add("active");
  });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}