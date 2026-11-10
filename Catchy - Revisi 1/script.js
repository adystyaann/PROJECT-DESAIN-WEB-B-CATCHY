document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('breedSearch');
  
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const keyword = e.target.value.toLowerCase();
      
      // Jika di halaman index.html (mencari kartu ras)
      const breedCards = document.querySelectorAll('.breed-card');
      if (breedCards.length > 0) {
        breedCards.forEach(card => {
          const name = card.querySelector('.breed-name').textContent.toLowerCase();
          if (name.includes(keyword)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }

      // Jika di halaman tentang.html (mencari detail ras)
      const breedDetails = document.querySelectorAll('.breed-detail');
      if (breedDetails.length > 0) {
        breedDetails.forEach(section => {
          const name = section.querySelector('h2').textContent.toLowerCase();
          if (name.includes(keyword)) {
            section.style.display = 'grid';
          } else {
            section.style.display = 'none';
          }
        });
      }
    });
  }
});