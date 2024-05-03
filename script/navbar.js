function toggleMobileMenu() {
    var element = document.getElementById("navbar-default");
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }