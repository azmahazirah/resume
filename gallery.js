// 1. DATE TIME
function updateDateTime(){
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset()*60000;
  const malaysiaTime = new Date(utc + 8*3600000);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("datetime").textContent = malaysiaTime.toLocaleDateString('en-GB', options) + ' | ' + malaysiaTime.toLocaleTimeString('en-GB') + ' (Malaysia Time)';
}
updateDateTime();
setInterval(updateDateTime, 1000);

// 2. FAMILY SWIPER (3D Coverflow)
var swiper1 = new Swiper(".photoSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true, 
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 3. VIDEO SWIPER (Standard Slide)
var swiper2 = new Swiper(".videoSwiper", {
  slidesPerView: 1, // Show 1 video at a time
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Stop video when sliding
  on: {
    slideChange: function () {
      document.querySelectorAll('video').forEach(vid => vid.pause());
    }
  }
});

// 4. LIGHTBOX SCRIPT
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(element) {
  const img = element.querySelector('img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

lightbox.addEventListener('click', (e) => {
  if(e.target !== lightboxImg) closeLightbox();
})

// 5. BACKGROUND MUSIC AUTOPLAY
window.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById("bg-music");
  audio.volume = 0.5;
  document.body.addEventListener('click', function() {
    audio.play();
  }, { once: true });
});