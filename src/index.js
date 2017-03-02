import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';



import store  from './store/index';
import App from './app/App';
import AboutComponent from './components/about/about.component';
import HomeComponent from './components/home/home.component';
import ServiceComponent from './components/service/services.component';

import './index.css';

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeComponent} />
        <Route path="/service" component={ServiceComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/home" component={HomeComponent} />
      </Route>
    </Router>
  </Provider>),
  document.getElementById('root')
);
