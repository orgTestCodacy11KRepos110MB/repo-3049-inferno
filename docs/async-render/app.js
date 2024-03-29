import { Component, render } from 'inferno';
import { createElement } from 'inferno-create-element';

let renderCounter = 0;

class ListItem extends Component {
  render() {
    renderCounter++;
    return createElement('li', null, this.props.children);
  }
}

class List extends Component {
  constructor() {
    super();
    // set initial time:
    this.state = {
      items: []
    };
    this.items = [];
  }

  componentDidMount() {
    let i = 0;

    while (this.items.length < 2000) {
      this.items[this.items.length] = createElement(ListItem, { key: ++i }, `${this.items.length}bar`);
      this.setState({ items: this.items });
    }
  }

  render() {
    return createElement('ul', null, this.state.items);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('#App');

  const times = [];
  const count = 2;
  let totalTime = 0;

  for (var i = 0; i < count; i++) {
    render(createElement(List), container);
  }

  setTimeout(function () {
    render(
      createElement(
        'div',
        null,
        `
      Rounds: ${count},
      Average: ${totalTime / count},
      Total: ${totalTime},
      counter: ${renderCounter}
    `
      ),
      container
    );
  }, 5000);
});
