import { fetchImages } from './api.js';

async function initSlider() {
  const cards = await fetchImages();
  const track = document.querySelector('.slider__track');
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  let currentIndex = 0;

  function createCard(card) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('slider__card-container');
    
    const imgElement = document.createElement('img');
    imgElement.classList.add('slider__image', 'slider__image--placeholder');
    imgElement.src = card.url;
    imgElement.alt = 'image';
    imgElement.loading = 'lazy';

    // Если возникнет ошибка при загрузке изображения, заменяем его на placeholder
    imgElement.addEventListener('error', () => {
      const placeholderDiv = document.createElement('div');
      placeholderDiv.classList.add('slider__image--placeholder');
      cardContainer.replaceChild(placeholderDiv, imgElement);
    });

    const txtElement = document.createElement('p');
    txtElement.classList.add('slider__text');
    txtElement.textContent = card.title;
    
    cardContainer.append(imgElement, txtElement);
    return cardContainer;
  }

  function initializeCards() {
    cards.forEach(card => track.appendChild(createCard(card)));
  }

  function updateButtons() {
    const offset = window.innerWidth;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === (offset <= 443 ? cards.length - 1 : cards.length - 2);
  }

  function goToSlide(index) {
    const imageWidth = track.children[0].offsetWidth + 20;
    track.scrollTo({ left: index * imageWidth, behavior: 'smooth' });
    currentIndex = index;
    updateButtons();
  }

  function handleSwipe() {
    let startX = 0;
    track.addEventListener('touchstart', e => (startX = e.touches[0].clientX));
    track.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) goToSlide(currentIndex + 1);
      if (endX - startX > 50) goToSlide(currentIndex - 1);
    });
  }

  function addEventListeners() {
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    handleSwipe();
  }

  initializeCards();
  updateButtons();
  addEventListeners();
}

document.addEventListener('DOMContentLoaded', initSlider);
