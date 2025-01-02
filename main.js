function openTool(page) {
  window.location.href = page;
}
console.log('Hello World!');

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Sidebar Toggle
const navToggle = document.getElementById("navToggle");
const sidebar = document.querySelector(".sidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

// Toggle Sidebar on button click
if (navToggle && sidebar) {
  navToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");

    // Change the icon of the button based on sidebar state
    const icon = navToggle.querySelector("i");
    if (sidebar.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
}

// Close Sidebar when close button is clicked
if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");

    // Reset icon in navToggle button to fa-bars
    const icon = navToggle.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
}