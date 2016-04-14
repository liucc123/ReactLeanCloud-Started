/*
* @Author: dingyiming
* @Date:   2016-04-07 15:31:37
* @Last Modified by:   dingyiming
* @Last Modified time: 2016-04-07 15:31:39
*/

'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

/*容器 container */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Test } from 'containers/Test';
import { NotFound } from 'containers/NotFound';

/*路由控制页面切换*/
export default (
	<Route path="/" component={ App }>
	    <IndexRoute component={ Home } />
	    <Route path="home/test" component={ Test } />
	    <Route path="home/*" component={ NotFound } />
	</Route>
	);