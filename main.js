// Function to open the tool page
function openTool(page) {
  window.location.href = page;
}
document.addEventListener("DOMContentLoaded", () => {
  

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

  // Dropdown functionality for the "Tools" button
  const toolsDropdownBtn = document.getElementById("toolsDropdownBtn");
  const toolsDropdownList = document.getElementById("toolsDropdownList");

  // Ensure dropdown button exists
  if (toolsDropdownBtn && toolsDropdownList) {
    // Toggle the dropdown visibility when the "Tools" button is clicked
    toolsDropdownBtn.addEventListener("click", (event) => {
      // Prevent click event from propagating to window (which closes the dropdown)
      event.stopPropagation();
      toolsDropdownList.classList.toggle("active");
    });

    // Close the dropdown if user clicks outside the dropdown menu
    window.addEventListener("click", (event) => {
      if (!toolsDropdownBtn.contains(event.target) && !toolsDropdownList.contains(event.target)) {
        toolsDropdownList.classList.remove("active");
      }
    });
  }
});