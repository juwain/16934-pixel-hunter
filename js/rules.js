import createElementFromTemplate from './createElementFromTemplate.js';
import renderScreen from './renderScreen.js';
import game1Screen from './game-1.js';
import {backButtonTemplate, onButtonBackClick} from './back-button.js';

const html = createElementFromTemplate(`<header class="header">
  ${backButtonTemplate}
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>
<footer class="footer">
  <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
  <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
  <div class="footer__social-links">
    <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
    <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
    <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
    <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
  </div>
</footer>`);

const formPlayerInfo = html.querySelector(`.rules__form`);
const inputPlayerName = html.querySelector(`.rules__input`);
const btnSubmitForm = html.querySelector(`.continue`);
const btnBack = html.querySelector(`button.back`);

formPlayerInfo.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  renderScreen(game1Screen);
});

inputPlayerName.addEventListener(`input`, () => {
  btnSubmitForm.disabled = !inputPlayerName.value.trim().length > 0;
});

btnBack.addEventListener(`click`, onButtonBackClick);

export default html;


