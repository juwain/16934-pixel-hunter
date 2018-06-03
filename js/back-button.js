import renderScreen from './renderScreen.js';
import greetingScreen from './greeting.js';

export const backButtonTemplate = `<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>`;

export const backButtonClickHandler = () => renderScreen(greetingScreen);
