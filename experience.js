// 1. DATE TIME UPDATE
function updateDateTime(){
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset()*60000;
  const malaysiaTime = new Date(utc + 8*3600000);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("datetime").textContent = malaysiaTime.toLocaleDateString('en-GB', options) + ' | ' + malaysiaTime.toLocaleTimeString('en-GB') + ' (Malaysia Time)';
}
updateDateTime();
setInterval(updateDateTime, 1000);

// 2. STAGGERED REVEAL ANIMATION ON LOAD
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.job-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 200); // Staggered delay
  });
});

// 3. BACKGROUND MUSIC AUTOPLAY
window.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("bg-music");
    audio.volume = 0.5;
    var playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {}).catch(error => {
        document.body.addEventListener('click', function() {
          audio.play();
        }, { once: true });
      });
    }
});