import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import NotFound from './NotFound';

ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path="/" component={App}>
  		<Route path="/:userId" component={App}/>
  	</Route>
    <Route path="*" component={NotFound}/>
  </Router>,
  document.getElementById('root')
);