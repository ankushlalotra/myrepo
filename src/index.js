import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Login from './views/Pages/Login'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import { Provider } from 'react-redux'
import todoApp from './redux/reducers'
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

// Containers
import Full from './containers/Full/'

const history = createBrowserHistory();
const store = createStore(todoApp,compose(
      applyMiddleware(thunk),
    ))
ReactDOM.render((
	 <Provider store={store}>
			  <HashRouter history={history}>
			    <Switch>
			      <Route exact path="/login" name="Login Page" component={Login}/>
			      <Route exact path="/404" name="Page 404" component={Page404}/>
			      <Route exact path="/500" name="Page 500" component={Page500}/>
			      <Route path="/" name="Home" component={Full}/>
			    </Switch>
			  </HashRouter>
	</Provider>
), document.getElementById('root'))
