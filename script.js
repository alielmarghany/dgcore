// Create the circle element
const mouseCircle = document.createElement('div');
mouseCircle.classList.add('mouse-circle');
document.body.appendChild(mouseCircle);

// Update circle position and behavior
document.addEventListener('mousemove', (event) => {
    // Move the circle to the mouse position
    mouseCircle.style.left = `${event.clientX - 15}px`; // Center the circle
    mouseCircle.style.top = `${event.clientY - 15}px`;

    // Check if the mouse is over an element with the class 'btn'
    const elementUnderMouse = document.elementFromPoint(event.clientX, event.clientY);
    if (elementUnderMouse && elementUnderMouse.classList.contains('btn')) {
        mouseCircle.classList.add('touching-btn'); // Add class when touching a button
    } else {
        mouseCircle.classList.remove('touching-btn'); // Remove class otherwise
    }
});


document.getElementById("new-business").addEventListener("click", () => {
    window.location.href = "mailto:digitalcore.eg@gmail.com?subject=New%20Business";
  });
  
  document.getElementById("general").addEventListener("click", () => {
    window.location.href = "mailto:digitalcore.eg@gmail.com?subject=General";
  });

  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.image-card');
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  
    // Optional: Add smooth scroll for links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  });
  