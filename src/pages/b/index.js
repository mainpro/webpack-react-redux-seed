import React, { Component } from 'react';
import createContainer from 'utils/createContainer';
import './index.scss';

class B extends Component {
  render() {
    return (
      <div className="page2"> Page2 </div>
    );
  }
}
export default createContainer(
    (state) => ({state}),                                   // mapStateToProps,
    require('actions/b').default,                         // mapActionCreators,
    B                                                      // 木偶组件
)