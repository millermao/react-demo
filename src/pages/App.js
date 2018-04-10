import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'

export default class App extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/counter">counter</Link></li>
                    <li><Link to="/userInfo">userInfo</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}