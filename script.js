// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
  
    // Configure the Intersection Observer: trigger when at least 50% of a section is visible
    const options = { threshold: 0.5 };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'visible' class to start the fade-in transition
          entry.target.classList.add("visible");
          // Optionally, if you want the fade-in to occur only once, unobserve the element:
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.background-video');
  const muteButton = document.getElementById('muteButton');
  
  // Set initial state
  video.muted = true;
  muteButton.textContent = 'UNMUTE';
  
  muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'UNMUTE' : 'MUTE';
  });
});
  