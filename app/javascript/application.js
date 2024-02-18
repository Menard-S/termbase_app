// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", () => {
  // Flash messages fade out in 6 seconds
  setTimeout(() => {
    document.querySelectorAll(".flash").forEach(flashMessage => {
      flashMessage.style.display = 'none';
    });
  }, 6000);

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keyup', function () {
      const query = this.value.toLowerCase();
      const rows = document.querySelectorAll(".styled-table tbody tr");

      rows.forEach(function (row) {
        const rowText = row.textContent.toLowerCase();
        row.style.display = rowText.includes(query) ? "" : "none";
      });
    });
  }

  // Drag functionality
  const dragItem = document.querySelector('.new-term-button');
  if (dragItem) {
    let isDragging = false;

    dragItem.addEventListener('dragstart', (e) => {
      isDragging = true;
      e.dataTransfer.setData('text/plain', null); // For Firefox compatibility
    });

    document.addEventListener('dragover', (e) => {
      e.preventDefault(); // Allows the drop event to fire
      if (isDragging) {
        const mouseX = e.clientX;
        const newLeft = Math.max(0, Math.min(window.innerWidth - dragItem.offsetWidth, mouseX));
        dragItem.style.left = newLeft + 'px';
      }
    });

    document.addEventListener('dragend', () => {
      isDragging = false;
      dragItem.style.position = 'fixed';
      dragItem.style.bottom = '20px';
    });
  }
});