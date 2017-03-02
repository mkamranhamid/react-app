import React, { Component } from 'react';
import { connect } from "react-redux";

import {GitAction} from '../../store/action/gitAction'
import './home.component.css';
import '../../app/App.css';
import logo from '../../logo.svg';

function mapStateToProps(state) {
    return {
        gitData: state.counterReducer['gitData'],
        loader: state.counterReducer['loading']
    };
}

function mapDispatchToProps(dispatch) {
    return {
        firefirebaseEvent: () => dispatch(GitAction.CallGetData())
    };
}

class HomeComponent extends Component {
  constructor(){
    super()
    // this.props.firefirebaseEvent()
  }
  render() {
    var gitRetreivedData = this.props.gitData;
    let gitRetreivedArr =  gitRetreivedData?Object.keys(gitRetreivedData).map(function (key) { return gitRetreivedData[key]}):gitRetreivedData;
    if (gitRetreivedArr.length && gitRetreivedArr.length > 0) {
      var listFromFb = gitRetreivedArr.map((d, i) => {
        return <li key={i}>{d.name}</li>
      })
    }
   var showLoading = this.props.loader?<img src={logo} className="App-logo" alt="logo" />:<ul>{listFromFb}</ul>;
    return (
      <div className="App">
        <div className="App-header">
          <h1>THIS IS HOME</h1>
        </div>
        <button className="button" onClick={this.props.firefirebaseEvent}><span>a </span></button>
        {showLoading}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
