setInterval(() => {
  const slider = document.querySelector('.testimonial-slider');
  if (slider) {
    slider.scrollBy({ left: 250, behavior: 'smooth' });
  }
}, 4000);
