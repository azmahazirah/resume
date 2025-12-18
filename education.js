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

// 2. SLIDER FUNCTIONALITY
let slideIndex = 0;
const slides = document.querySelector('.slides');
// Check if slides exist to avoid errors on other pages
if (slides) {
    const totalSlides = slides.children.length;

    document.querySelector('.next').addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % totalSlides;
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    document.querySelector('.prev').addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

// 3. SCROLL ANIMATION
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.container');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('visible');
    }
  }
}
reveal();

// 4. BACKGROUND MUSIC AUTOPLAY
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