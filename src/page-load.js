function pageLoad() {
  const container = document.getElementsByTagName('div');
  // header
  const header = createHeader('header', 'Star Food');
  container.appendChild(header);
  // nav
  const nav = createNav('nav');
  container.appendChild(nav);
  // tab-content
  const tabContent = createMain('tab-content');
  container.appendChild(tabContent);
  // footer
  const footer = createFooter('footer', 'Made by the force');
  container.appendChild(footer);
}

export default pageLoad;