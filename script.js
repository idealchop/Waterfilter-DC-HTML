
document.addEventListener('DOMContentLoaded', function() {
  const dropdownTrigger = document.querySelector('.navbar8-link4-dropdown-trigger');
  const dropdown = document.querySelector('.navbar8-container20');

  if (dropdownTrigger && dropdown) {
    dropdownTrigger.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target) && !dropdownTrigger.contains(event.target)) {
        dropdown.style.display = 'none';
      }
    });
  }
});
