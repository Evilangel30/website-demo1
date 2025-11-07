// Sidebar and dark mode handling
const sidebar = document.getElementById('sidebar');
const collapseBtn = document.querySelector('.collapse-btn');
const content = document.getElementById('content');

// Toggle sidebar visibility (mobile)
function toggleSidebar() {
  sidebar.classList.toggle('show');
}

// Toggle dropdown submenu
function toggleSubmenu(element) {
  element.classList.toggle('open');
}

// Collapse sidebar (desktop)
function collapseSidebar() {
  sidebar.classList.toggle('collapsed');
  const icon = collapseBtn.querySelector('i');
  icon.classList.toggle('fa-angles-right');
  icon.classList.toggle('fa-angles-left');
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('.toggle-dark i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

// Define internal page contents (displayed dynamically)
const internalPages = {
  "home": `<h1>Home</h1><p>Welcome to the home section of the dashboard.</p>`,
  "about": `<h1>About Us</h1><p>This is a dynamic about section displayed without leaving the page.</p>`,

};

// Load page content dynamically into main section
function loadContent(page) {
  content.innerHTML =
    internalPages[page] ||
    `<h1>Page Not Found</h1><p>Sorry, we couldn’t find what you’re looking for.</p>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Perform search inside content area
function performSearch() {
  const query = document.getElementById("search-bar").value.trim().toLowerCase();
  if (internalPages[query]) {
    loadContent(query);
  } else {
    content.innerHTML = `<h1>No Results</h1><p>Sorry, no internal page found for "<strong>${query}</strong>".</p>`;
  }
}

// Event listeners for search
document.getElementById("search-button").addEventListener("click", performSearch);
document.getElementById("search-bar").addEventListener("keypress", function (e) {
  if (e.key === "Enter") performSearch();
});
