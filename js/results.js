import {createElementFromTemplate} from './util.js';
import footerTemplate from './footer.js';
import {countScore} from './count-score.js';

export const getResults = (gameState) => createElementFromTemplate(`<header class="header">
</header>
<div class="result">
  <h1>${gameState.isWin ? `Победа!` : `Поражение`}</h1>
  <table class="result__table">
    <tr>
      <td class="result__number">1.</td>
      <td colspan="2">
        <ul class="stats">
          ${gameState.answers.map((answer) => `<li class="stats__result stats__result--${answer.isRight ? `correct` : `wrong`}">${answer.time}</li>`).join(``)}
          <!--<li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--unknown"></li>-->
        </ul>
      </td>
      <td class="result__points">×&nbsp;100</td>
      <td class="result__total">${gameState.answers.length * 100}</td>
    </tr>
    <!--<tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">50</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">100</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">-100</td>
    </tr>-->
    <tr>
      <td colspan="5" class="result__total  result__total--final">${countScore(gameState.answers, gameState.livesNumber)}</td>
    </tr>
  </table>
</div>
${footerTemplate}`);
