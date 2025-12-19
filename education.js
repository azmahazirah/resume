// 1. MALAYSIA LIVE CLOCK
function updateDateTime() {
    const d = new Date();
    // Adjusting to Malaysia Time (UTC+8)
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const malaysiaTime = new Date(utc + (3600000 * 8));
    
    // Format the Date part: Friday, 19 December 2025
    const dateOptions = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    const datePart = malaysiaTime.toLocaleDateString('en-GB', dateOptions);
    
    // Format the Time part: 17:57:08 (24-hour format)
    const timePart = malaysiaTime.toLocaleTimeString('en-GB', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    
    // Combine into: Friday, 19 December 2025 | 17:57:08 (Malaysia Time)
    const finalDisplay = `${datePart} | ${timePart} (Malaysia Time)`;
    
    document.getElementById("datetime").textContent = finalDisplay;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 2. SCROLL REVEAL ANIMATION
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', reveal);
reveal(); // Initial check

// 3. MEMORY SLIDER
let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const allSlides = document.querySelectorAll('.slides img');

if (slidesContainer && allSlides.length > 0) {
    document.querySelector('.next').addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % allSlides.length;
        updateSlider();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + allSlides.length) % allSlides.length;
        updateSlider();
    });

    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    
    // Auto-slide every 5 seconds
    setInterval(() => {
        slideIndex = (slideIndex + 1) % allSlides.length;
        updateSlider();
    }, 5000);
}

// 4. MUSIC AUTOPLAY HANDLER
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById("bg-music");
    if (audio) {
        audio.volume = 0.3;
        
        const playAudio = () => {
            audio.play().catch(e => console.log("Audio play blocked until interaction."));
            document.removeEventListener('click', playAudio);
        };
        document.addEventListener('click', playAudio);
    }
});