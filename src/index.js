import './style.css';
import { callPage, createFooter } from './page-load';
import homePage from './home';

const container = document.getElementById('content');

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

const createNav = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = '<strong>The Table Restaurant<strong>';
  nav.appendChild(createMenuTabs());
  return nav;
};

function init() {
  container.append(createNav(), homePage(), createFooter());

  const home = document.getElementById('home');
  home.addEventListener('click', callPage);
  const menu = document.getElementById('menu');
  menu.addEventListener('click', callPage);
  const contact = document.getElementById('contact');
  contact.addEventListener('click', callPage);
}

document.addEventListener('DOMContentLoaded', init);