
export default class Section {
    constructor({ data, renderer }, containerSelector) {
      this._renderedItems = data;
      this._renderer = renderer;
      
      this._container = document.querySelector(containerSelector);
    }
  
    addItem(element) {
      this._container.append(element);
    }

    renderItems() {
      this._renderedItems.forEach(item => { 
        this._renderer(item);
      }); 
      
    }
  }

  /*

  export default class Section {
    constructor(items, render, containerSelector) {
      this.items = items;
      this.render = render;
      this.containerSelector = containerSelector;
      this.container = document.querySelector(this.containerSelector);
    }
    render() {
      const container = document.querySelector(this.selector);
      this.items.forEach((item) => {
        this.render(item, container);
      });
    }
  
    addItem(item) {
      this.items.push(item);
      this.render();
    }

    getElement() {
      return this.container;
    }
  }

  */

