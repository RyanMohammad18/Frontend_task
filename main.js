
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
      const subMenu = item.querySelector('.sub-menu');
      subMenu.style.opacity = 1;
      subMenu.style.pointerEvents = 'auto';
  });
});

const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const navbanner = document.querySelector('.navbanner');
const clearIcon = document.querySelector('.clear-icon');

searchIcon.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  
  if (searchContainer.classList.contains('active')) {
    searchInput.style.width = '100%'; 
    searchInput.focus();
  } else {
    searchInput.style.width = '0';
  }
});


clearIcon.addEventListener('click', () => {
  searchContainer.classList.remove('active');
  searchInput.style.width = '0';
  searchInput.value = ''; 
});


searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === '') {
    clearIcon.style.display = 'none';
  } else {
    clearIcon.style.display = 'block';
  }
});