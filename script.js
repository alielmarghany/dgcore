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