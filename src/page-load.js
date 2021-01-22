import contactPage from './contact';
import homePage from './home';
import menuPage from './menu';

// function pageLoad() {
//   const container = document.getElementsByTagName('div');
//   // header
//   const header = createHeader('header', 'Star Food');
//   container.appendChild(header);
//   // nav
//   const nav = createNav('nav');
//   container.appendChild(nav);
//   // tab-content
//   const tabContent = createMain('tab-content');
//   container.appendChild(tabContent);
//   // footer
//   const footer = createFooter('footer', 'Made by the force');
//   container.appendChild(footer);
// }

const callPage = (event) => {
  const container = document.getElementById('content');
  container.innerHTML = '';
  console.log(event.target);

  switch (event.target.id) {
    case 'home':
      container.appendChild(homePage())
      break;
    case 'menu':
      container.appendChild(menuPage())
      break;
    case 'contact':
      container.appendChild(contactPage())
      break;
    default:
      break;
}
};

export default callPage;