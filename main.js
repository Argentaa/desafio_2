const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  } else {
    navbar.style.backgroundColor = 'white';
    navbar.style.boxShadow = 'none';
  }
});

document.querySelectorAll('.quantity-control').forEach(control => {
  const minusBtn = control.querySelector('.minus');
  const plusBtn = control.querySelector('.plus');
  const quantitySpan = control.querySelector('.quantity');

  minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 1) {
      quantitySpan.textContent = quantity - 1;
    }
  });

  plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let quantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = quantity + 1;
  });
});

document.querySelectorAll('.favorite-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const icon = btn.querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
    if (icon.classList.contains('fas')) {
      icon.style.color = '#ff4444';
    } else {
      icon.style.color = 'white';
    }
  });
});