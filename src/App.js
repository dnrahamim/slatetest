import React, { Component } from 'react';
import Video from './video';
import initialValue from './value.json';
import './App.css';

import { Editor } from 'slate-react';
import { Value } from 'slate';

class App extends Component {
  /**
   * Deserialize the raw initial value.
   *
   * @type {Object}
   */

  state = {
    value: Value.fromJSON(initialValue),
  }

  /**
   * Render a Slate node.
   *
   * @param {Object} props
   * @return {Element}
   */

  renderNode = props => {
    switch (props.node.type) {
      case 'video':
        return <Video {...props} />
    }
  }

  /**
   * On change.
   *
   * @param {Change} change
   */

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <title>Example</title>
        <body>
          <header>Header</header>
          <div id="main">
            <Editor
              placeholder="Enter some text..."
              value={this.state.value}
              onChange={this.onChange}
              renderNode={this.renderNode}
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
