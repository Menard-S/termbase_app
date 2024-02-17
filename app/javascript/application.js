// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", () => {
    setTimeout(() => {
      document.querySelectorAll(".flash").forEach(flashMessage => {
        flashMessage.style.display = 'none';
      });
    }, 6000);
  });
  
document.addEventListener('DOMContentLoaded', () => {
  const dragItem = document.querySelector('.new-term-button');
  let isDragging = false;

  dragItem.addEventListener('dragstart', (e) => {
    isDragging = true;
    // For Firefox compatibility
    e.dataTransfer.setData('text/plain', null);
  });

  document.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allows the drop event to fire
    if (isDragging) {
      const mouseX = e.clientX;
      // Calculate the new left position, constrained by the viewport width and element width
      const newLeft = Math.max(0, Math.min(window.innerWidth - dragItem.offsetWidth, mouseX));
      dragItem.style.left = newLeft + 'px';
    }
  });

  document.addEventListener('dragend', () => {
    isDragging = false;
    // Reset the element to stick to the bottom of the viewport
    dragItem.style.position = 'fixed';
    dragItem.style.bottom = '20px';
  });
});
  
document.addEventListener("DOMContentLoaded", function() {
  // Get the input field
  var searchInput = document.getElementById('searchInput');

  // Listen for key up events on the search input
  searchInput.addEventListener('keyup', function() {
    // Get the query from the input field
    var query = searchInput.value.toLowerCase();

    // Get all the table rows in the tbody of the table
    var rows = document.querySelectorAll(".styled-table tbody tr");

    // Loop through each row
    rows.forEach(function(row) {
      // Get the text content of the row
      var rowText = row.textContent.toLowerCase();

      // If the row's text content contains the query, show the row; otherwise, hide it
      if (rowText.indexOf(query) !== -1) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});
