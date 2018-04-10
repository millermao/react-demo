import React, {Component} from 'react';

export default class Hello extends Component {
    
    handleChange(e){
        this.props.changeTitle(e.target.value);
    }
    render() {   
        return (
            <div>
                <div>Hello,React!</div>
                <input onChange={this.handleChange.bind(this)} type="text"/>
            </div>
        )
    }
    componentWillMount(){
        this.props.changeTitle('new title')
    }
}