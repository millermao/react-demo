import React, {Component} from 'react';
import {increment, decrement, reset} from 'actions/counter';

import {connect} from 'react-redux';

class Counter extends Component {
    increment(){
        this.props.increment()
    }
    decrement(){
        this.props.decrement()
    }
    reset(){
        this.props.reset()
    }
    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter.count}</div>
                <button onClick={this.increment.bind(this)}>增加
                </button>
                <button onClick={this.decrement.bind(this)}>自减
                </button>
                <button onClick={this.reset.bind(this)}>重置
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);