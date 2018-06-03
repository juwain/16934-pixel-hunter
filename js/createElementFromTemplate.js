export default (templateString) => {
  const template = document.createElement(`div`);

  template.innerHTML = templateString.trim();

  return template;
};
