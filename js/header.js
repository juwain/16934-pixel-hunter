import {createElementFromTemplate} from './util.js';
import {renderBackButton} from './back-button.js';

const createHeader = (gameState) => createElementFromTemplate(`
  <h1 class="game__timer">${gameState.time}</h1>
  <div class="game__lives">
    ${new Array(3 - gameState.livesNumber)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    ${new Array(gameState.livesNumber)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
  </div>
`);

export const renderHeader = (container, gameState) => {
  const headerBox = container.querySelector(`header.header`);

  headerBox.innerHTML = ``;

  renderBackButton(headerBox);
  headerBox.insertAdjacentElement(`afterbegin`, createHeader(gameState));
};

