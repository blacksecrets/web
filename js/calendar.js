document.addEventListener('DOMContentLoaded', function() {
  const tiles = document.querySelectorAll('.event-tile');
  tiles.forEach((tile) => {
    tile.addEventListener('click', function(e) {
      if (e.target.classList.contains('get-details-btn')) {
        // Let the <a> handle redirect
      } else {
        console.log('Tile clicked!');
      }
    });
  });
});
