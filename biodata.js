// 1. CLOCK FORMAT: Friday, 19 December 2025 | 17:57:08 (Malaysia Time)
function updateDateTime(){
  const d = new Date();
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  const malaysiaTime = new Date(utc + (3600000 * 8));
  
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dateStr = malaysiaTime.toLocaleDateString('en-GB', options);
  const timeStr = malaysiaTime.toLocaleTimeString('en-GB', { hour12: false });
  
  document.getElementById("datetime").textContent = dateStr + ' | ' + timeStr + ' (Malaysia Time)';
}
updateDateTime();
setInterval(updateDateTime, 1000);

// 2. BACKGROUND MUSIC
window.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById("bg-music");
  audio.volume = 0.4;
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(_ => {}).catch(error => {
      document.body.addEventListener('click', function() {
        audio.play();
      }, { once: true });
    });
  }
});