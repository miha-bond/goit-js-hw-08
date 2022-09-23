import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';
// ++++++++++++++++++++++++++++++++++++++++++++++
const player = new Player('vimeo-player');
const LOCALSTORAGE_PLAYER_KEY = 'videoplayer-current-time';
const refPlayer = document.querySelector('#vimeo-player');
// ++++++++++++++++++++++++++++++++++++++++++++++
player.on('timeupdate', throttle(data, 1000));
function data(timeupdate) {
  const seconds = timeupdate.seconds;
  save(LOCALSTORAGE_PLAYER_KEY, seconds);
  if (!seconds) {
    return;
  }
}

// -----------------------------------------------
player.setCurrentTime(load(LOCALSTORAGE_PLAYER_KEY)).then(function (seconds) {
  // seconds = the actual time that the player seeked to
});
// .catch(function (error) {
//   switch (error.name) {
//     case 'RangeError':
//       // the time was less than 0 or greater than the video’s duration
//       break;

//     default:
//       // some other error occurred
//       break;
//   }
// });
// ------------------------------------------------
const markup = `<button class="buttonReset" type="reset">Очистити час перегляду</button>`;
refPlayer.insertAdjacentHTML('afterend', markup);

const onResetTime = event => {
  window.location.reload();
  remove(LOCALSTORAGE_PLAYER_KEY);
};
const refButton = document.querySelector('.buttonReset');
refButton.addEventListener('click', onResetTime);
// ------------------------------------------------
// ================================================

//todo Завдання 2 - відеоплеєр
//? HTML містить <iframe> з відео для Vimeo плеєра. Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

//* <iframe
//*   id="vimeo-player"
//*   src="https://player.vimeo.com/video/236203659"
//*   width="640"
//*   height="360"
//*   frameborder="0"
//*   allowfullscreen
//*   allow="autoplay; encrypted-media"
//* ></iframe>

//! Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:
//
//! Ознайомся з документацією бібліотеки Vimeo плеєра.
//
//! Додай бібліотеку як залежність проекту через npm.
//
//! Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
//
//! Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//
//! Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
//
//! Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
//
//! Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
