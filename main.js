// Navigation dropdown functionality
const dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.querySelector('.dropdown-arrow').style.transform = 'rotate(180deg)';
  });
  
  link.addEventListener('mouseout', () => {
    link.querySelector('.dropdown-arrow').style.transform = 'rotate(0deg)';
  });
});

// Smooth scrolling for anchor links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(10, 37, 64, 0.95)';
    navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = 'none';
  }
});

// Filter buttons functionality
const filterButtons = document.querySelectorAll('.filters button');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Product quantity selector functionality
document.querySelectorAll('.quantity-selector').forEach(selector => {
  const increaseBtn = selector.querySelector('button:first-child');
  const decreaseBtn = selector.querySelector('button:last-child');
  const quantitySpan = selector.querySelector('span');
  
  increaseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let quantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = quantity + 1;
  });
  
  decreaseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 1) {
      quantitySpan.textContent = quantity - 1;
    }
  });
});

// Wishlist button functionality
document.querySelectorAll('.wishlist-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (btn.textContent === '♡') {
      btn.textContent = '♥';
    } else {
      btn.textContent = '♡';
    }
  });
});

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    const firstName = contactForm.querySelector('#firstName');
    const lastName = contactForm.querySelector('#lastName');
    const email = contactForm.querySelector('#email');
    const message = contactForm.querySelector('#message');
    const privacyCheckbox = contactForm.querySelector('#privacy');
    
    // Simple validation
    if (!firstName.value.trim()) isValid = false;
    if (!lastName.value.trim()) isValid = false;
    if (!email.value.trim()) isValid = false;
    if (!message.value.trim()) isValid = false;
    if (!privacyCheckbox.checked) isValid = false;
    
    if (isValid) {
      // Form submission logic would go here
      contactForm.reset();
      alert('Message sent successfully!');
    } else {
      alert('Please fill in all required fields and accept the privacy policy.');
    }
  });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]');
    
    if (email.value.trim()) {
      newsletterForm.reset();
      alert('Thank you for subscribing!');
    } else {
      alert('Please enter your email address.');
    }
  });
}

// Play button hover effect
const playButton = document.querySelector('.play-button');
if (playButton) {
  playButton.addEventListener('mouseenter', () => {
    playButton.style.transform = 'translate(-50%, -50%) scale(1.1)';
  });
  
  playButton.addEventListener('mouseleave', () => {
    playButton.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
  playButton.addEventListener('click', () => {
    alert('Video playback would start here.');
  });
}

// Live chat button
const chatButton = document.querySelector('.start-chat');
if (chatButton) {
  chatButton.addEventListener('click', () => {
    alert('Live chat would open here.');
  });
}

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const productCard = button.closest('.product-card');
    const productTitle = productCard.querySelector('.product-title').textContent;
    const quantity = productCard.querySelector('.quantity-selector span').textContent;
    
    alert(`Added ${quantity} ${productTitle}(s) to your cart!`);
  });
});
