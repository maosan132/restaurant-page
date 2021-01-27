import cover from './images/cover.jpg';

const homePage = () => {
  const main = document.createElement('div');
  main.setAttribute('class', 'main');
  const intro = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const img = document.createElement('img');
  intro.setAttribute('class', 'intro');
  h1.innerText = 'Get to know Our Restaurant';
  p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit
    anim id est laborum.`;
  img.setAttribute('class', 'image');
  img.setAttribute('src', `${cover}`);
  intro.append(h1, p);
  main.append(intro, img);

  return main;
};

export default homePage;