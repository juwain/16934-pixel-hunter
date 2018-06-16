import {createElementFromTemplate} from './util.js';

const createHeader = (data) => createElementFromTemplate(`<header class="header">
<h1 class="game__timer">${data.time}</h1>
<div class="game__lives">
  ${new Array(3 - data.livesCount)
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
    .join(``)}
  ${new Array(data.livesCount)
    .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
    .join(``)}
</div>
</header>`);

export const renderHeader = (container, state) => {
  container.insertAdjacentElement(`afterbegin`, createHeader(state));
};

