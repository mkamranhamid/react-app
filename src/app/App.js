import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    var menuList = ['Home', 'About', 'Service'];
    var linkList = menuList.map((d, i) => {
      return <li key={i}><Link to={d.toLowerCase()}>{d}</Link></li>
    })
    return (
      <div className="App">
        <div id="nav">
          <ul>{linkList}</ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
