import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// +++++++++++++++++++++++++++++++++++++++++++++++++
const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onImgClick);

function onImgClick(evt) {
  evt.preventDefault();
}

const addItemGallery = galleryItems.map(
  ({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a href="${original}" class="gallery__link">
        <img src="${preview}" alt="${description}" class="gallery__image">
      </a>
    </div>`;
  }
);
const markup = addItemGallery.join('');
galleryRef.insertAdjacentHTML('afterbegin', markup);
//---------------------------------------------
new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 400,
  showCounter: true,
  enableKeyboard: true,
  docClose: true,
  scrollZoom: true,
  animationSlide: true,
  maxZoom: 1.5,
});
// ---------------------------------------------
// =============================================
//todo Завдання 1 - бібліотека SimpleLightbox
//? Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

//! Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
//
//! Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).
//
//! Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

//? Описаний в документації
//* import SimpleLightbox from "simplelightbox";
//? Додатковий імпорт стилів
//* import "simplelightbox/dist/simple-lightbox.min.css";
