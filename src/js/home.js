 const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const menuPath = document.getElementById("menu-path");

  let isOpen = false;

  toggleBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle("hidden");

    // Change icon from hamburger to X
    if (isOpen) {
      menuPath.setAttribute("d", "M6 18L18 6M6 6l12 12"); // X icon
    } else {
      menuPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16"); // Hamburger icon
    }
  });