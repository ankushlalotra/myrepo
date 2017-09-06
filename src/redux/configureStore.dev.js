import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
    )
  );

  store.subscribe(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    }
  });

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    );
  }

  return store;
}
