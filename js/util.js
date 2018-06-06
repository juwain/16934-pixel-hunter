export const createElementFromTemplate = (templateString) => {
  const template = document.createElement(`div`);

  template.innerHTML = templateString.trim();

  return template;
};

const mainTemplate = document.querySelector(`main.central`);

export const renderScreen = (element) => {
  mainTemplate.innerHTML = ``;
  mainTemplate.appendChild(element);
};

