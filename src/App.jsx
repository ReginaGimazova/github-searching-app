/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/:name" component={TopicPage} exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
