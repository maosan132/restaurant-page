import cover from './images/cover.jpg';

const homePage = () => {
  const main = document.createElement('div');
  main.setAttribute('class', 'main');
  main.innerHTML = `
  <div class="intro">
  <h1>Get to know Our Restaurant</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit
    anim id est laborum.</p>
  </div>
  <img class="image" src= ${cover} alt="">
`;
return main;
}

export default homePage;