import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import  {configureStore}  from './configureStore';

import './app.scss';

import { App } from './components/App';
import { GlobalStyles } from './components/GlobalStyles';


const store = configureStore();

render(
  <Provider store={store}>
    <GlobalStyles/>
    <App />
  </Provider>
  , document.getElementById('root')
);