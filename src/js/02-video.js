import Player from '@vimeo/player';
const player = new Player('vimeo-player');
var throttle = require('lodash.throttle');
// ---------------------------------------
player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);
// ---------------------------------------
const timeLocalStr = localStorage.getItem('videoplayer-current-time');
const savedTime = JSON.parse(timeLocalStr).target.seconds;
// ---------------------------------------
player.setCurrentTime(savedTime).then(function (seconds) {
  // seconds = the actual time that the player seeked to
});
//----------------------------------------

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
