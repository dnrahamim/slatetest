import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Editor } from 'slate-react';
import { Value } from 'slate';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
});

class App extends Component {
  // Set the initial value when the app is first constructed.
  state = {
    value: initialValue
  };

  // On change, update the app's React state with the new editor value.
  onChange = ({ value }) => {
    this.setState({ value })
  }

  onKeyDown = (event, change) => {
    if (event.key != '&') return
    event.preventDefault()
    change.insertText('and')
    return true
  }

  render() {
    return (
      <div>
        <title>Example</title>
        <body>
          <header>Header</header>
          <div id="main">
            <Editor
              value={this.state.value}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              style = {{flex: 1}}
            />
            <nav>Nav</nav>
            <aside>Aside</aside>
          </div>
          <footer>Footer</footer>
        </body>
      </div>
    );
  }
}

export default App;
