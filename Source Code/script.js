// JavaScript for carousel functionality
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    // Loop around
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides -1;
    // Remove active classes
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    // Add active to current
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function showNext() {
    showSlide(currentSlide +1);
  }

  function showPrev() {
    showSlide(currentSlide -1);
  }

  // Event Listeners
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });