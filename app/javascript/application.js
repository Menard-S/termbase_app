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
  
