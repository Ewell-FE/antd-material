import React, {Component} from 'react';
import HighLight from 'react-highlight';
import {withStyles} from 'material-ui/styles';
import './atom-one-light.css'
import Collapse from 'material-ui/transitions/Collapse';
import Pagination from '@/components/Pagination';

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
        const {classes}=this.props,
            codeLink = classes.codeLink;
        let codeString = "import React,{Component} from 'react';\n" +
            "import Pagination from '@/components/Pagination';\n" +
            "\n" +
            "export default class App extends Component{\n" +
            "    render(){\n" +
            "        return (\n" +
            "                <Pagination\n" +
            "                    defaultCurrent={1}\n" +
            "                    total={50}\n" +
            "                    onChange={(page)=>{console.log('当前页:'+page)}}\n" +
            "                    showQuickJumper\n" +
            "                    showTotal={(total,range)=>(`${range[0]}-${range[1]} / ${total} 条`)}/>\n" +
            "        )\n" +
            "    }\n" +
            "}";
        return (
            <div>
                <Collapse in={this.state.isShow}>
                    <HighLight>{codeString}</HighLight>
                </Collapse>
                <a href="javascript:;" className={codeLink} onClick={this.toggleFun}>
                    <i className="fa fa-code" aria-hidden="true"></i>
                </a>
            </div>
        )
    }
}

const styles = (theme)=> {
    console.log(theme)
    return {
        componentName: {
            color: theme.palette.grey[600],
            fontWeight: 'normal',
            margin: '0 0 30px'
        },
        demoName: {
            color: theme.palette.grey[600],
            fontWeight: 'normal',
            fontSize: '18px',
            margin: '0 0 20px'
        },
        demoIntro: {
            color: theme.palette.grey[600],
            fontSize: '14px',
            margin: '0 0 10px'
        },
        demoBox: {
            background: theme.palette.grey[200],
            padding: '48px 24px 16px',
            position: 'relative',
            marginBottom: '40px'
        },
        demo: {
            display: 'flex',
            justifyContent: 'center'
        },
        codeLink: {
            position: 'absolute',
            right: '20px',
            top: '10px',
            width: '71px',
            height: '71px',
            fontSize: '20px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.text.primary
        }
    }
}

@withStyles(styles)
export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {classes}=this.props,
            {...otherProps}=this.props,
            demoName = classes.demoName,
            demoIntro = classes.demoIntro,
            demoBox = classes.demoBox,
            demo = classes.demo;
        return (
            <div  style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <h1 className={classes.componentName}>控件名称</h1>
                <h6 className={demoName}>控件demo名称</h6>
                <p className={demoIntro}>控件demo说明</p>
                <div className={demoBox}>
                    <DemoCode {...otherProps} />
                    <div className={demo}>
                        <Pagination
                            defaultCurrent={6}
                            total={500}
                            onChange={(page)=>{console.log('当前页:'+page)}}
                            showQuickJumper
                            showTotal={(total,range)=>(`${range[0]}-${range[1]} / ${total} 条`)}/>
                    </div>
                </div>
                <h6 className={demoName}>控件demo名称2</h6>
                <p className={demoIntro}>控件demo说明2</p>
                <div className={demoBox}>
                    <DemoCode {...otherProps} />
                    <div className={demo}>
                        <Pagination
                            defaultCurrent={6}
                            total={500}
                            onChange={(page)=>{console.log('当前页:'+page)}}
                            showQuickJumper
                            showTotal={(total,range)=>(`${range[0]}-${range[1]} / ${total} 条`)}/>
                    </div>
                </div>
            </div>
        )
    }
}