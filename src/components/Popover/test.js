/**
 * Created by sasha on 2018/4/12.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class app extends Component{
    componentDidMount() {
        this.props.withRef && this.props.withRef(ReactDOM.findDOMNode(this.dom))
    }
    render(){
        return(
            <button
                onClick={this.props.onClick}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                ref={ref=>this.dom =ref}>组件Hover me</button>
        )
    }
}