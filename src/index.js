// import _ from 'lodash';
import './style.css';
import callPage from './page-load'

console.log('hello city of hell');

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

function init() {
  console.log('i am init()');

  console.log(createMenuTabs());
  container.appendChild(createMenuTabs());

  const home = document.getElementById('home');
  home.addEventListener('click', callPage);
  const menu = document.getElementById('menu');
  menu.addEventListener('click', callPage);
  const contact = document.getElementById('contact');
  contact.addEventListener('click', callPage);
}

document.addEventListener('DOMContentLoaded', init);