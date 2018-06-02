export default (templateString) => {
  const template = document.createElement(`template`);

  template.innerHTML = templateString.trim();

  return template.content;
};
