import throttle from 'lodash.throttle';
import { load, save, remove } from './storage';
// +++++++++++++++++++++++++++++++++++++++++++
const LOCALSTORAGE_FORM_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
// +++++++++++++++++++++++++++++++++++++++++++
initPage();

const onFormInput = event => {
  const { name, value } = event.target;
  let saveData = load(LOCALSTORAGE_FORM_KEY);
  saveData = saveData ? saveData : {};
  saveData[name] = value;
  save(LOCALSTORAGE_FORM_KEY, saveData);
};

const throttleOnFormInput = throttle(onFormInput, 500);
formRef.addEventListener('input', throttleOnFormInput);
// -------------------------------------------
function initPage() {
  const saveData = load(LOCALSTORAGE_FORM_KEY);
  if (!saveData) {
    return;
  }
  Object.entries(saveData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}
// -------------------------------------------
const onSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  event.currentTarget.reset();
  remove(LOCALSTORAGE_FORM_KEY);
};

formRef.addEventListener('submit', onSubmit);
// -------------------------------------------
// ===========================================
//todo Завдання 3 - форма зворотного зв'язку
//? HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
//
//* <form class="feedback-form" autocomplete="off">
//*    <label>
//*      Email
//*      <input type="email" name="email" autofocus />
//*    </label>
//*    <label>
//*      Message
//*      <textarea name="message" rows="8"></textarea>
//*    </label>
//*  <button type="submit">Submit</button>
//*</form>
//
//! Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:
//
//! Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
//
//! Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
//
//! Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
//
//! Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
