document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.intro');
  const letter = document.querySelector('.letter');
  const paragraphs = document.querySelectorAll('.letter-body p');

  // Lock scroll during intro
  document.body.classList.add('intro-active');

  // Enter the letter
  intro.addEventListener('click', () => {
    intro.style.display = 'none';
    document.body.classList.remove('intro-active'); // ✅ scroll returns
    letter.classList.add('visible');
  });

  // Scroll reveal paragraphs
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  paragraphs.forEach(p => observer.observe(p));
});
