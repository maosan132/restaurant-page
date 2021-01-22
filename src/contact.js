import map from './images/map.png';

const contactPage = () => {
  const main = document.createElement('div');
  main.setAttribute('class', 'main');

  main.innerHTML = `
    <div class="intro">
    <h1>Book the Table</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua:</p>
      <br>
    <ul>
      <li><strong>Contact Name: </strong> Bruce Wayne</li>
      <li><strong>Phone number: </strong> +376456456</li>
      <li><strong>Address: </strong> Street 123</li>
      <li><strong>email: </strong> info@table.com</li>
    </ul>
  </div>
  <img class="image" src= ${map} alt="">
  `;
  return main;
}

export default contactPage;