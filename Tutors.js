function sortTutors() {
    // Get the selected value from the dropdown
    var sortValue = document.getElementById("sort").value;
  
    // Get the container of the cards
    var container = document.querySelector(".container");
  
    // Get all the cards inside the container
    var cards = document.querySelectorAll(".card");
  
    // Convert the NodeList to an array for easier sorting
    var cardsArray = Array.from(cards);
  
    // Define a function for sorting the cards by tutors' names
    function compareNames(a, b) {
      var nameA = a.querySelector("h2").innerText.toUpperCase();
      var nameB = b.querySelector("h2").innerText.toUpperCase();
  
      if (sortValue === "az") {
        return nameA.localeCompare(nameB);
      } else if (sortValue === "za") {
        return nameB.localeCompare(nameA);
      }
    }
  
    // Sort the cards array based on the compareNames function
    cardsArray.sort(compareNames);
  
    // Clear the container
    container.innerHTML = "";
  
    // Append the sorted cards back to the container
    cardsArray.forEach(function (card) {
      container.appendChild(card);
    });
  }
  
  // Add event listener to the dropdown
  document.getElementById("sort").addEventListener("change", sortTutors);
  