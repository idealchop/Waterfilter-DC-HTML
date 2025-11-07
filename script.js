
document.addEventListener('DOMContentLoaded', function() {
  const dropdownTrigger = document.querySelector('.navbar8-link4-dropdown-trigger');
  const dropdownMenu = document.querySelector('.navbar8-container20');

  if (dropdownTrigger && dropdownMenu) {
    dropdownTrigger.addEventListener('click', function() {
      dropdownMenu.classList.toggle('active');
    });
  }
});
