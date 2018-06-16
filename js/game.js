// import { createElementFromTemplate, renderScreen } from './util.js';
import {createElementFromTemplate} from './util.js';
import footerTemplate from './footer.js';
import {generateLevelsData} from './data.js';
import {renderHeader} from './header.js';
import {renderStats} from './stats.js';
import {gameState} from './data.js';

let html;

const createGameLevel = (levels) => {
  for (let level of levels) {
    switch (level.type) {
      case `single`:
        html = createElementFromTemplate(`<div class="game">
          <p class="game__task">${level.question}</p>
          <form class="game__content  game__content--wide">
            <div class="game__option">
              <img src="${level.answers[0].url}" alt="Option 1" width="705" height="455">
              <label class="game__answer  game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--wide  game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
        </div>
        ${footerTemplate}`);
        break;

      case `double`:
        html = createElementFromTemplate(`<div class="game">
          <p class="game__task">${level.question}</p>
          <form class="game__content">
            <div class="game__option">
              <img src="${level.answers[0].url}" alt="Option 1" width="468" height="458">
              <label class="game__answer game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
            <div class="game__option">
              <img src="${level.answers[1].url}" alt="Option 2" width="468" height="458">
              <label class="game__answer  game__answer--photo">
                <input name="question2" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question2" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
        </div>
        ${footerTemplate}`);
        break;

      case `triple`:
        html = createElementFromTemplate(`<div class="game">
          <p class="game__task">${level.question}</p>
          <form class="game__content  game__content--triple">
            <div class="game__option">
              <img src="${level.answers[0].url}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
              <img src="${level.answers[1].url}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
              <img src="${level.answers[2].url}" alt="Option 1" width="304" height="455">
            </div>
          </form>
        </div>
        ${footerTemplate}`);
        break;
    }
  }
};

// game single
// const formGame = html.querySelector(`.game__content`);

// formGame.addEventListener(`input`, () => {
//   renderScreen(game3Screen);
//   renderBackButton(game3Screen);
// });

// game double
// const formGame = html.querySelector(`.game__content`);

// formGame.addEventListener(`input`, () => {
//   const answers = Array.from(formGame.elements).filter((element) => element.checked);

//   if (answers.length === 2) {
//     renderScreen(game2Screen);
//     renderBackButton(game2Screen);
//   }
// });

// game triple
// const formButtons = html.querySelectorAll(`.game__option`);

// Array.from(formButtons).forEach((btn) => {
//   btn.addEventListener(`click`, () => {
//     renderScreen(resultsScreen);
//     renderBackButton(resultsScreen);
//   });
// });

createGameLevel(generateLevelsData());

renderHeader(html, gameState);
renderStats(html.querySelector(`.game`));

export default html;
