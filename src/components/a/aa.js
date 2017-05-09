/**
 * Created by dipu on 2017/3/9.
 */
import React, { Component ,PropTypes} from 'react';


class AA extends Component {
    /*
    * method 增加的方法
    * */
    handleAdd(e){
        this.props.onAdd(1);
    }
    /*
     * method 减少的方法
     * */
    handleReduce(e){
        this.props.onReduce(1);
    }
    render() {
        return (
            <div>
                <h1>{this.props.showText}</h1>
                <button onClick={this.handleAdd.bind(this)}>+</button>
                <button onClick={this.handleReduce.bind(this)}>-</button>
            </div>
        );
    }
}

AA.propTypes={
    onAdd: PropTypes.func.isRequired,
    onReduce:PropTypes.func.isRequired
}

export default  AA