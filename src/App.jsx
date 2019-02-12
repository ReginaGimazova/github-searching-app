import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
     <Provider store={store}>
         <BrowserRouter>
             <Switch>
                 <Route path="/" component={HomePage} exact/>
             </Switch>
         </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
