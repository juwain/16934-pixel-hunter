// import { createElementFromTemplate, renderScreen } from './util.js';
import {createElementFromTemplate} from './util.js';
import footerTemplate from './footer.js';
import {generateLevelsData} from './data.js';
import {renderHeader} from './header.js';
import {renderStats} from './stats.js';
import {gameState} from './data.js';

const createGameContainer = () => {
  return createElementFromTemplate(`<div class="game"></div>${footerTemplate}`);
};

const fillGameLevel = (level) => {
  let html;
  switch (level.type) {
    case `single`:
      html = createElementFromTemplate(`
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
        </form>`);
      break;

    case `double`:
      html = createElementFromTemplate(`
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
        </form>`);
      break;

    case `triple`:
      html = createElementFromTemplate(`
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
        </form>`);
      break;
  }

  return html;
};

const renderGameLevel = (index) => {
  const gameBox = gameContainer.querySelector(`.game`);
  const level = gameData[index];
  const gameLevel = fillGameLevel(level);

  gameBox.innerHTML = ``;
  gameBox.insertAdjacentElement(`afterbegin`, gameLevel);


  switch (level.type) {
    case `single`:
      gameBox.querySelector(`.game__content`).addEventListener(`input`, () => {
        renderGameLevel(++index);
      });

      break;

    case `double`:
      gameBox.querySelector(`.game__content`).addEventListener(`input`, (evt) => {
        const answers = Array.from(evt.currentTarget.elements).filter((element) => element.checked);

        if (answers.length === 2) {
          renderGameLevel(++index);
        }
      });

      break;

    case `triple`:
      Array.from(gameBox.querySelectorAll(`.game__option`)).forEach((btn) => {
        btn.addEventListener(`click`, () => renderGameLevel(++index));
      });

      break;
  }

  renderStats(gameBox);
};

const gameData = generateLevelsData();
const gameContainer = createGameContainer();

renderGameLevel(0);
renderHeader(gameContainer, gameState);

export default gameContainer;
