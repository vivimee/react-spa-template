import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import createRoutes from '../routes';
import createStore from './createStore';
import reducers from '../redux/reducers';

const store = createStore(reducers);

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      {createRoutes()}
    </BrowserRouter>
  </Provider>
);
