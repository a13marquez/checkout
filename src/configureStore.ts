import { createStore, applyMiddleware, Middleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

export const configureStore = () => {
  const middlewares: Middleware[] = [reduxThunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(
    reducers,
    applyMiddleware(...middlewares),
  );
};
