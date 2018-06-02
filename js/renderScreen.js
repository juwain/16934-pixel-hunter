const mainTemplate = document.querySelector(`main.central`);

export default (element) => {
  mainTemplate.innerHTML = ``;

  mainTemplate.appendChild(element);
};
