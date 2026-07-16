document.addEventListener('click', function(event) {
  const link = event.target.closest('a[href="#"]');
  if (link) {
    event.preventDefault();
  }
});