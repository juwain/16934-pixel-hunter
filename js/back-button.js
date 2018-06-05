import {createElementFromTemplate, renderScreen} from './util.js';
import greetingScreen from './greeting.js';

const html = createElementFromTemplate(`<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>`);

const btnBack = html.querySelector(`button.back`);

btnBack.addEventListener(`click`, () => renderScreen(greetingScreen));

export const renderBackButton = (container) => {
  container.querySelector(`header.header`).insertAdjacentElement(`afterbegin`, html);
};
