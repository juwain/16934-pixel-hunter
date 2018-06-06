import {createElementFromTemplate, renderScreen} from './util.js';
import greetingScreen from './greeting.js';
import footerTemplate from './footer.js';

const html = createElementFromTemplate(`<div id="main" class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
</div>
${footerTemplate}`);

const btnShowNextScreen = html.querySelector(`.intro__asterisk`);

btnShowNextScreen.addEventListener(`click`, () => renderScreen(greetingScreen));

export default html;
