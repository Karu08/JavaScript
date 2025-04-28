const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        lightboxImg.src = thumbnail.src;   
        lightbox.style.display = 'flex';  
        setTimeout(() => {
            lightbox.classList.add('show'); 
        }, 10); 
    });
});


function closeLightbox() {
    lightbox.classList.remove('show');
    setTimeout(() => {
        lightbox.style.display = 'none';   
    }, 500); 
}

closeBtn.addEventListener('click', closeLightbox);

// Clicking outside the image also closes
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Closing with esc key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && lightbox.classList.contains('show')) {
        closeLightbox();
    }
});
