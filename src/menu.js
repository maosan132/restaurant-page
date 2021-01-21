import * from './helper';

const container = document.getElementById('content');
const nav = document.createElement('nav');
const grid = document.createElement('div').setAttribute('class', 'grid');
const footer = document.createElement('footer');

grid.innerhtml = `
  <div class="module">ddfd</div>
  <div class="module">ddfdf</div>
  <div class="module">dfdf</div>
  <div class="module">ddf</div>
  <div class="module">ddf</div>
  <div class="module">dfdf</div>
`;

const createMenuTabs = () => {
  const tabs = document.createElement('div');
  tabs.className = 'tabsContainer';
  tabs.innerHTML = `
    <button class="menulink" id="home">Home</button>
    <button class="menulink" id="menu">Our Menu</button>
    <button class="menulink" id="contact">Contact Us</button>
  `;
  return tabs;
};