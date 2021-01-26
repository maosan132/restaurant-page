import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';

const menuPage = () => {
  const title = document.createElement('h1');
  const grid = document.createElement('div');
  const tempContainer = document.createElement('div');
  tempContainer.setAttribute('class', 'menu')
  const module1 = document.createElement('div');
  const module2 = document.createElement('div');
  const module3 = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const title1 = document.createElement('h2');
  const title2 = document.createElement('h2');
  const title3 = document.createElement('h2');
  const price1 = document.createElement('span');
  const price2 = document.createElement('span');
  const price3 = document.createElement('span');
  const p = document.createElement('p');
  title.innerHTML = 'Our Unique Menu';
  grid.setAttribute('class', 'grid');
  module1.setAttribute('class', 'module');
  module2.setAttribute('class', 'module');
  module3.setAttribute('class', 'module');
  img1.setAttribute('src', `${item1}`);
  img2.setAttribute('src', `${item2}`);
  img3.setAttribute('src', `${item3}`);
  title1.innerText = 'Fabulous food';
  title2.innerText = 'Delicious thing';
  title3.innerText = 'Yummy item';
  price1.innerText = 'price: $12';
  price2.innerText = 'price: $20';
  price3.innerText = 'price: $35';
  p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.`;
  module1.append(img1, title1, price1, p);
  module2.append(img2, title2, price2, p);
  module3.append(img3, title3, price3, p);
  grid.append(module1, module2, module3);


  tempContainer.append(title, grid);
  return tempContainer;
};

export default menuPage;