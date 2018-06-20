import {createElementFromTemplate, renderScreen} from './util.js';
import footerTemplate from './footer.js';
import {generateLevelsData} from './data.js';
import {renderHeader} from './header.js';
import {renderStats} from './stats.js';
import {gameState} from './data.js';
import {getResults} from './results.js';
import {renderBackButton} from './back-button.js';

const gameData = generateLevelsData();
const currentGameState = Object.assign({}, gameState);

const createGameContainer = () => {
  return createElementFromTemplate(`
    <header class="header"></header>
    <div class="game"></div>
    ${footerTemplate}
  `);
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
              <input name="question1" type="radio" value="painting">
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
              <input name="question1" type="radio" value="painting">
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
              <input name="question2" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
        </form>`);
      break;

    case `triple`:
      html = createElementFromTemplate(`
        <p class="game__task">${level.question}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option" data-type="${level.answers[0].type}">
            <img src="${level.answers[0].url}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option" data-type="${level.answers[1].type}">
            <img src="${level.answers[1].url}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option" data-type="${level.answers[2].type}">
            <img src="${level.answers[2].url}" alt="Option 1" width="304" height="455">
          </div>
        </form>`);
      break;
  }

  return html;
};

const switchLevel = (index, answer) => {
  currentGameState.answers.push(answer);

  if (!answer.isRight) {
    currentGameState.livesNumber--;
  }

  renderGameLevel(++index);
};

const renderGameLevel = (index) => {
  if (index === gameData.length || currentGameState.livesNumber === 0) {
    currentGameState.isOver = true;
  }

  if (!currentGameState.isOver) {
    const gameBox = gameContainer.querySelector(`.game`);
    const level = gameData[index];
    const gameLevel = fillGameLevel(level);

    gameBox.innerHTML = ``;
    gameBox.insertAdjacentElement(`afterbegin`, gameLevel);

    switch (level.type) {
      case `single`:
        gameBox.querySelector(`.game__content`).addEventListener(`input`, (evt) => {
          switchLevel(index, {
            isRight: evt.currentTarget.elements[`question1`].value === gameData[index].answers[0].type,
            time: 15 // temp hardcoded value
          });
        });

        break;

      case `double`:
        gameBox.querySelector(`.game__content`).addEventListener(`input`, (evt) => {
          const answers = Array.from(evt.currentTarget.elements).filter((element) => element.checked);

          if (answers.length === 2) {
            switchLevel(index, {
              isRight: answers.every((answer, answerIndex) => {
                return answer.value === gameData[index].answers[answerIndex].type;
              }),
              time: 15 // temp hardcoded value
            });
          }
        });

        break;

      case `triple`:
        Array.from(gameBox.querySelectorAll(`.game__option`)).forEach((btn) => {
          btn.addEventListener(`click`, (evt) => {
            switchLevel(index, {
              isRight: evt.currentTarget.dataset[`type`] === `painting`,
              time: 15 // temp hardcoded value
            });
          });
        });

        break;
    }

    renderHeader(gameContainer, currentGameState);
    renderStats(gameBox, currentGameState);
  } else {
    if (currentGameState.livesNumber > 0) {
      currentGameState.isWin = true;
    }

    const resultsScreen = getResults(currentGameState);
    renderScreen(resultsScreen);
    renderBackButton(resultsScreen);
  }
};

const gameContainer = createGameContainer();

renderGameLevel(0);
renderHeader(gameContainer, currentGameState);

export default gameContainer;
