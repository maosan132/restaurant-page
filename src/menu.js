import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';

const menuPage = () => {
  const title = document.createElement('h1');
  const grid = document.createElement('div');
  const tempContainer = document.createElement('div');

  title.innerHTML = 'Our Unique Menu'
  grid.setAttribute('class', 'grid');
  grid.innerHTML = `
    <div class="module">
    <img src=${item1} alt="">
    <h2>Item #1</h2>
    <span>Price: $20</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.</p>
  </div>
  <div class="module">
    <img src=${item2} alt="">
    <h2>Item #2</h2>
    <span>Price: $40</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.</p>
  </div>
  <div class="module">
    <img src=${item3} alt="">
    <h2>Item #3</h2>
    <span>Price: $60</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.</p>
  </div>
  <div class="module">
    <img src=${item2} alt="">
    <h2>Item #4</h2>
    <span>Price: $10</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.</p>
  </div>
  <div class="module">
    <img src=${item3} alt="">
    <h2>Item #5</h2>
    <span>Price: $80</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.</p>
  </div>
  <div class="module">
    <img src=${item1} alt="">
    <h2>Item #6</h2>
    <span>Price: $200</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.</p>
  </div>
  `;

  tempContainer.append(title, grid);
  return tempContainer;
};

export default menuPage;