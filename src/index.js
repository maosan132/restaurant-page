// import _ from 'lodash';
import './style.css';

console.log('hello city of hell');

const container = document.getElementById('content');
const callPage = (event) => {
  console.log(event.id);
  switch (event.id) {
    case 'home':
      console.log('renders home module.');
      break;
    case 'menu':
      console.log('renders menu module.');
      break;
    case 'contact':
      console.log('renders contact module.');
      break;
    default:
      break;
  }
};

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

function init() {
  console.log('i am init()');
  // const addEvent = elem => elem.addEventListener('click', () => { callPage(this); }, false);
  container.appendChild(createMenuTabs());

  const home = document.getElementById('home');
  home.addEvent();
  const menu = document.getElementById('menu');
  menu.addEventListener('click', () => { callPage(this); }, false);
  const contact = document.getElementById('contact');
  contact.addEventListener('click', () => { callPage(this); }, false);
}

document.addEventListener('DOMContentLoaded', init);