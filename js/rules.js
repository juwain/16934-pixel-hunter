import {createElementFromTemplate, renderScreen} from './util.js';
import game1Screen from './game-1.js';
import backButton from './back-button.js';
import footerTemplate from './footer.js';

const html = createElementFromTemplate(`<header class="header">
  ${backButton}
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
${footerTemplate}`);

const formPlayerInfo = html.querySelector(`.rules__form`);
const inputPlayerName = html.querySelector(`.rules__input`);
const btnSubmitForm = html.querySelector(`.continue`);

formPlayerInfo.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  renderScreen(game1Screen);
});

inputPlayerName.addEventListener(`input`, () => {
  btnSubmitForm.disabled = !inputPlayerName.value.trim().length > 0;
});

export default html;


