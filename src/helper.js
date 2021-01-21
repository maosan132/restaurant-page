// Getting and Setting the Values of Element Attributes
const attr = (elem, name, value) => {
  if (!name || name.constructor != String) return '';
  name = { for: 'htmlFor', className: 'class' }[name] || name;
  if (typeof value !== 'undefined') {
    elem[name] = value;
    if (elem.setAttribute) elem.setAttribute(name, value);
  }
  return elem[name] || elem.getAttribute(name) || '';
};

// A Generic Function for Creating a New DOM Element
const create = elem => (document.createElementNS
  ? document.createElementNS('http://www.w3.org/1999/xhtml', elem)
  : document.createElement(elem));

// Remove a single Node from the DOM
const remove = elem => {
  if (elem) elem.parentNode.removeChild(elem);
};

// Remove all of an Element’s children from the DOM
const empty = elem => {
  while (elem.firstChild) remove(elem.firstChild);
};
