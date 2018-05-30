'use strict';

const SCREEN_IDS = [
  `greeting`,
  `rules`,
  `game-1`,
  `game-2`,
  `game-3`,
  `stats`
];

const ARROWS_TEMPLATE = `
  <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 95px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
  </div>
`;

const DIRECTION = {
  backwards: `ArrowLeft`,
  forwards: `ArrowRight`
};

const mainTemplate = document.querySelector(`main.central`);
const screens = SCREEN_IDS.map((id) => document.getElementById(id));
let currentScreenIndex = 0;

const clearScreen = () => {
  mainTemplate.innerHTML = ``;
};

const renderScreen = (index) => {
  if (screens[index]) {
    currentScreenIndex = index;

    clearScreen();

    const screenTemplate = screens[index].content;
    mainTemplate.appendChild(screenTemplate.cloneNode(true));
  }
};

const navigateBackwards = () => {
  renderScreen(currentScreenIndex - 1);
};

const navigateForwards = () => {
  renderScreen(currentScreenIndex + 1);
};

const globalKeyDownHandler = (event) => {
  switch (event.key) {
    case DIRECTION.backwards:
      navigateBackwards();
      break;

    case DIRECTION.forwards:
      navigateForwards();
      break;
  }
};

const renderNavigationControls = () => {
  document.body.insertAdjacentHTML(`beforeend`, ARROWS_TEMPLATE);
};

const addAppHandlers = () => {
  document.addEventListener(`keydown`, globalKeyDownHandler);

  const btnBackwards = document.querySelector(`.arrows__btn:first-of-type`);
  const btnForwards = document.querySelector(`.arrows__btn:first-of-type + .arrows__btn:last-of-type`);

  if (btnBackwards && btnForwards) {
    btnBackwards.addEventListener(`click`, navigateBackwards);
    btnForwards.addEventListener(`click`, navigateForwards);
  }
};

renderNavigationControls();
addAppHandlers();
renderScreen(currentScreenIndex);


