// Interactividad JavaScript Moderno

document.addEventListener('DOMContentLoaded', () => {
  // 1. Filtrado de Categorías de Productos
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Activar botón seleccionado
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Sombra dinámica en la barra superior al deslizar
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // 3. Menú Móvil desplegable
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#FAFAF9';
        navMenu.style.padding = '1.5rem 2rem';
        navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
      }
    });
  }
});