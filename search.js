const carparks = [
  { name: "Valley Metro", location: "Main St", link: "1martin.html" },
  { name: "Riverside Parking", location: "River Rd", link: "riverside.html" },
  { name: "City Center Garage", location: "Broadway", link: "citycenter.html" },
  { name: "Northside Lot", location: "North Ave", link: "northside.html" },
  { name: "Airport Parking", location: "Airport Blvd", link: "airport.html" }
];

const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");

function searchCarparks() {
  const query = searchBar.value.trim().toLowerCase();
  resultsContainer.innerHTML = "";

  if (query === "") {
    resultsContainer.innerHTML = "<p>Please type something to search.</p>";
    return;
  }

  const results = carparks.filter(carpark =>
    carpark.name.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
  } else {
    results.forEach(carpark => {
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.innerHTML = `
        <strong>${carpark.name}</strong><br>
        ${carpark.location}
      `;
      // Redirect to the carpark link when clicked
      div.addEventListener("click", () => {
        window.location.href = carpark.link;
      });
      resultsContainer.appendChild(div);
    });
  }
}

searchButton.addEventListener("click", searchCarparks);

// Optional: trigger search when pressing Enter
searchBar.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchCarparks();
  }
});