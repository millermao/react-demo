import React, {Component} from 'react';
import Hello from 'component/Hello/Hello';
import './Home.scss';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            title:'这是主页'
        }
    }
    _handleClick(){
        this.setState({
            count:++this.state.count
        })
    }
    changeTitle(title){
        this.setState({
            title:title
        })
    }
    render() {
        return (
            <div>
                <h2 className="page-box">{this.state.title}</h2>
                <Hello changeTitle = {this.changeTitle.bind(this)}  / >                
                <p>计数次数{this.state.count}</p>
                <button onClick={this._handleClick.bind(this)}>自增</button>
            </div>
        )
    }
}