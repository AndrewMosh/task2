const btnToTop = document.querySelector('.btnToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    btnToTop.classList.add('show');
  } else {
    btnToTop.classList.remove('show');
  }
});

btnToTop.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
