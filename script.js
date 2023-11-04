// Get the container element
var sidenavContainer = document.getElementById("sidenav");

// Get all buttons with class "side-menu" inside the container
var sidenavItems = sidenavContainer.getElementsByClassName("side-menu");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < sidenavItems.length; i++) {
  sidenavItems[i].addEventListener("click", function() {
    // Remove the "active" class from all items
    for (var j = 0; j < sidenavItems.length; j++) {
      sidenavItems[j].classList.remove("active");
    }
    // Add the "active" class to the clicked item
    this.classList.add("active");
  });
}

// Get the container element
var navbarContent = document.getElementById("navbarSupportedContent");

// Get all buttons with class "side-menu" inside the container
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
