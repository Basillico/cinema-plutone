document.addEventListener('DOMContentLoaded', function () {
  console.log('script caricato');

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryImages = document.querySelectorAll('.gallery-image');

  console.log('lightbox:', lightbox);
  console.log('lightboxImage:', lightboxImage);
  console.log('lightboxClose:', lightboxClose);
  console.log('galleryImages trovate:', galleryImages.length);

  if (!lightbox || !lightboxImage || !lightboxClose) {
    console.error('Manca uno degli elementi della lightbox nell’HTML.');
    return;
  }

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.body.classList.remove('lightbox-open');
  }

  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      console.log('click su immagine:', image.src);
      openLightbox(image.src, image.alt);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
});
