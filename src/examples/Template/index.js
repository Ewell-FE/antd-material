import React, {Component} from 'react';
import HighLight from 'react-highlight';
import {withStyles} from 'material-ui/styles';
import './atom-one-light.css'
import Collapse from 'material-ui/transitions/Collapse';

class DemoCode extends Component {
    constructor(props) {
        super(props);
        this.toggleFun = this.toggleFun.bind(this);
        this.state = {
            isShow: false
        }
    }

    toggleFun() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        const {classes}=this.props
        return (
            <div>
                <Collapse in={this.state.isShow}>
                    <HighLight>{this.props.code}</HighLight>
                </Collapse>
                <a className={classes.codeLink} onClick={this.toggleFun}>
                    <i className="fa fa-code" aria-hidden="true"></i>
                </a>
            </div>
        )
    }
}

const styles = (theme)=> {
    return {
        componentName: {
            color: theme.palette.grey[600],
            fontWeight: 'normal',
            margin: '0 0 30px'
        },
        demoBox: {
            background: theme.palette.grey[200],
            padding: '48px 24px 16px',
            position: 'relative',
            marginBottom: '40px',
            textAlign: 'left'
        },
        demo: {
            textAlign:'center'
        },
        codeLink: {
            position: 'absolute',
            right: '20px',
            top: '10px',
            width: '40px',
            height: '30px',
            fontSize: '20px',
            textAlign: 'center',
            fontWeight: 'bold',
            cursor:'pointer',
            color: theme.palette.text.primary
        }
    }
};

@withStyles(styles)
export default class App extends Component {
    render() {
        const {classes}=this.props,
            demoBox = classes.demoBox,
            demo = classes.demo;
        return (
            <div>
                <div className={demoBox}>
                    <DemoCode classes={classes} code={this.props.code}/>
                    <div className={demo}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}