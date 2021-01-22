import contactPage from './contact';
import homePage from './home';
import menuPage from './menu';


const createNav = () => {
  console.log('dasdf')
  const nav = document.createElement('nav');
  nav.innerHTML = 'The Table Restaurant'
  return nav;
};

const createFooter= () => {
  const footer = document.createElement('footer');
  footer.innerHTML = 'Copyright maosan132@ 2021';
  return footer;
};

const callPage = (event) => {
  const container = document.getElementById('content');
  container.innerHTML = '';
  console.log(event.target);

  switch (event.target.id) {
    case 'home':
      container.append(homePage())
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

// export default callPage;
export {callPage, createFooter, createNav};