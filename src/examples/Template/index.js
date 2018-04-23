import React, {Component} from 'react';
import HighLight from 'react-highlight';
import {withStyles} from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import Icon from '@/components/Icon'
import './atom-one-light.css'
import Collapse from 'material-ui/transitions/Collapse';

class DemoCode extends Component {
    render() {
        return (
            <Collapse in={this.props.isShow}>
                <HighLight>{this.props.code}</HighLight>
            </Collapse>
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
            boxShadow: '0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12)',
            position: 'relative',
            marginBottom: '40px',
            textAlign: 'left'
        },
        title: {
            color: 'rgba(0,0,0,.54)',
            backgroundColor: 'rgba(0,0,0,.03)',
            padding: "8px 20px",
            textAlign: 'right'
        },
        demo: {
            textAlign: 'center',
            padding: 30,
            borderTop: '1px solid rgba(0,0,0,.03)'
        },
        codeLink: {
            display: 'inline-block',
            width: '40px',
            height: '40px',
            lineHeight: '40px',
            fontSize: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            color: theme.palette.text.primary,
            "& > a": {
                color: theme.palette.text.primary
            }
        }
    }
};

@withStyles(styles)
export default class App extends Component {
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
                <div className={classes.demoBox}>
                    <div className={classes.title}>
                        <span className={classes.codeLink} onClick={this.toggleFun}>
                            <Tooltip id="tooltip-icon" title="View source">
                                <Icon type="code"/>
                            </Tooltip>
                        </span>
                        <span className={classes.codeLink}>
                               <a target="_black" href={this.props.github} alt="Edit in github">
                                   <Tooltip id="tooltip-icon" title="See the source on Github">
                                        <Icon type="github"/>
                                   </Tooltip>
                               </a>
                        </span>
                    </div>
                    <DemoCode classes={classes} code={this.props.code} isShow={this.state.isShow}/>
                    <div className={classes.demo}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}