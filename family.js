// 1. DATE TIME SCRIPT (Updated Format)
function updateDateTime(){
  const d = new Date();
  // Calculate Malaysia Time (UTC+8)
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const malaysiaTime = new Date(utc + (8 * 3600000));

  // Format Date: Friday, 19 December 2025
  const dateOptions = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  const datePart = malaysiaTime.toLocaleDateString('en-GB', dateOptions);

  // Format Time: 17:57:08 (24-hour format)
  const timeOptions = { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: false 
  };
  const timePart = malaysiaTime.toLocaleTimeString('en-GB', timeOptions);

  // Final Output: Friday, 19 December 2025 | 17:57:08 (Malaysia Time)
  document.getElementById("datetime").textContent = `${datePart} | ${timePart} (Malaysia Time)`;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// 2. REVEAL ANIMATION ON SCROLL
function revealItems() {
  const items = document.querySelectorAll('.family-card, .scrapbook-item');
  const triggerBottom = window.innerHeight / 5 * 4;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < triggerBottom) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealItems);
window.addEventListener('load', revealItems);

// 3. BACKGROUND MUSIC AUTOPLAY
window.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("bg-music");
    if (audio) {
      audio.volume = 0.4;
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => {
          document.body.addEventListener('click', function() {
            audio.play();
          }, { once: true });
        });
      }
    }
});