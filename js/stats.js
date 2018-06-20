import {createElementFromTemplate} from './util.js';

const createStats = (gameState) => createElementFromTemplate(`<div class="stats">
  <ul class="stats">
    ${gameState.answers.map((answer) => `<li class="stats__result stats__result--${answer.isRight ? `correct` : `wrong`}">${answer.time}</li>`).join(``)}
    <!--<li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--unknown"></li>-->
  </ul>
</div>`);

export const renderStats = (container, gameState) => {
  container.insertAdjacentElement(`beforeend`, createStats(gameState));
};

