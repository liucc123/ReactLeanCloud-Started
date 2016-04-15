import 'babel-polyfill'
import React,{ Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App'
import { createStore } from 'redux'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore()

export class Home extends Component {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}
