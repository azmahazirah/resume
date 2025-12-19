// 1. DATE TIME UPDATE (Formatted)
function updateDateTime(){
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const malaysiaTime = new Date(utc + (8 * 3600000));

  // Date Format: Friday, 19 December 2025
  const dateOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  const datePart = malaysiaTime.toLocaleDateString('en-GB', dateOptions);

  // Time Format: 17:57:08 (24-hour with seconds)
  const timePart = malaysiaTime.toLocaleTimeString('en-GB', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  // Assemble the final string
  document.getElementById("datetime").textContent = `${datePart} | ${timePart} (Malaysia Time)`;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// 2. STAGGERED REVEAL ANIMATION
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.job-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });
});

// 3. BACKGROUND MUSIC
window.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("bg-music");
    if (audio) {
      audio.volume = 0.4;
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => {
          // If browser blocks it, play on first user click
          document.body.addEventListener('click', function() { 
            audio.play(); 
          }, { once: true });
        });
      }
    }
});