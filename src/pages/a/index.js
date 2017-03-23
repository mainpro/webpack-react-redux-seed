import React, { Component } from 'react';
import createContainer from 'utils/createContainer';
import './index.scss';


//components
import AA from 'components/a'

class A extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {state,aAdd,aReduce} = this.props;
        return (
          <div className="page1"> 页面A
              <AA  showText={state.a}  onAdd={number=>aAdd(number)}onReduce={number=>aReduce(number)} />
          </div>
        );
  }
}
export default createContainer(
    (state) => ({state}),                                   // mapStateToProps,
    require('actions/a').default,                         // mapActionCreators,
    A                                                       // 木偶组件
)