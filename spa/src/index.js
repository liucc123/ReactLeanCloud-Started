/*
* @Author: dingyiming
* @Date:   2016-04-07 15:28:02
* @Last Modified by:   dingyiming
* @Last Modified time: 2016-04-07 15:36:20
*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import ga from 'ga-react-router';
import routes from './routes';
import { syncReduxAndRouter } from 'redux-simple-router';


/* 异步切换网页的标题 */
/*syncReduxAndRouter(browserHistory, store);
browserHistory.listen(location => {
  ga('send', {
    'hitType': 'pageview',
    'page': location.pathname,
    'title': location.pathname,
  });
});*/

ReactDOM.render(
	<Router history={browserHistory}>
        {routes}
      </Router>,
	document.getElementById('root')
	);