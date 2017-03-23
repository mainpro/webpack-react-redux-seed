// application's entry
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link,browserHistory, hashHistory } from 'react-router';
import store from 'store/index'
import '../css/common.scss';


//注意，不要直接这样做，要区分开发环境和生产环境
import DevTools from 'components/tools';
// pages
import A from './a/index';
import B from './b/index';
import C from './c/index';


const history = __DEV__ ? browserHistory : hashHistory;

class Application extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="a">a页面</Link>
          <Link to="b">b页面</Link>
          <Link to="c">c页面</Link>
        </div>
        {this.props.children}
          <DevTools />
      </div>
    );
  }
}
render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Application}>
        <IndexRoute component={A}/>
        <Route path="a" component={A}></Route>
        <Route path="b" component={B}></Route>
        <Route path="c" component={C}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));