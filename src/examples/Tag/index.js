import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Tag from '@/components/Tag'
import Input from '@/components/Input'
import {withStyles} from 'material-ui/styles';

import Icon from '@/components/Icon'


export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Tag>Tag</Tag>
                <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
                <Tag closable={true} afterClose={(e) => {
                }}>可关闭</Tag>
                <Tag closable={true} disabled={true}>禁止关闭</Tag>
            </div>
        )
    }
}


const styles = theme => ({
    root: {
        display: 'inline-block',
        "& > input,& > span": {
            width: 100,
            marginTop: 5,
        }
    }
})

@withStyles(styles, {name: 'MuiInput-ant-demo'})
export class Demo2md extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['Unremovable', 'Tag 2', 'Tag 3'],
            inputVisible: false,
            inputValue: '',
        }
    }

    //添加
    onAdd = () => {
        this.setState({inputVisible: true})
    }

    onChange = (e) => {
        const {tags} = this.state
        tags.push(e.target.value)
        this.setState({tags,inputVisible: false})
    }

    render() {
        const {tags, inputVisible} = this.state
        return (
            <div>
                {
                    tags.map((tag, key) => {
                        return (
                            <Tag closable={key != 0 && true}
                                 afterClose={(e) => {
                                     console.log(e)
                                 }}
                                 key={key}>{tag}</Tag>
                        )
                    })
                }
                {
                    !inputVisible && <button onClick={() => this.onAdd()}>添加</button>
                }
                {
                    inputVisible && <div className={this.props.classes.root}>
                        <Input size="small" placeholder="small size" onBlur={(e) => this.onChange(e)}/>
                        <br/>
                    </div>

                }
            </div>
        )
    }
}

export class Demo3md extends Component {
    render() {
        return (
            <div>
                <Tag>Tag</Tag>
            </div>
        )
    }
}
export default class App extends Component {
    render() {
        return (
            <div style={{width: 900, padding: '0 24px', margin: '0 auto'}}>
                <Title/>

                <Typography variant="display1" gutterBottom>
                    基本
                </Typography>
                <p style={{margin: '24px 0 12px 0'}}>
                    基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose afterClose 两个事件。
                </p>
                <Templete code={`import Tag from '@/components/Tag'

export class Demo1md extends Component {
    render() {
        return (
            <div>
                <Tag>Tag</Tag>
                <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
                <Tag closable={true} afterClose={(e)=>{console.log(e)}}>可关闭</Tag>
                <Tag closable={true} disabled={true}>禁止关闭</Tag>
            </div>
        )
    }
}
`}>
                    <Demo1md/>
                </Templete>

                <Typography variant="display1" gutterBottom>
                    动态添加和删除
                </Typography>
                <p style={{margin: '24px 0 12px 0'}}>
                    用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 afterClose 实现
                </p>
                <Templete code={`import Tag from '@/components/Tag'
export class Demo2md extends Component {
    render() {
        return (
           <div>
                {
                    tags.map((tag, key) => {
                        return (
                            <Tag closable={key != 0 && true}
                                 afterClose={(e) => {
                                     console.log(e)
                                 }}
                                 key={key}>{tag}</Tag>
                        )
                    })
                }
                {
                    !inputVisible ? <Tag onClick={this.onAdd}>添加</Tag> : <Input size="small" placeholder="small size"/>
                }
            </div>
        )
    }
}
`}>
                    <Demo2md/>
                </Templete>

                <Typography variant="display1" gutterBottom>
                    多彩标签
                </Typography>
                <p style={{margin: '24px 0 12px 0'}}>
                    我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
                </p>
                <Templete code={`import Tag from '@/components/Tag'
export class Demo3md extends Component {
    render() {
        return (
            <div>
                <Tag>Tag</Tag>
            </div>
        )
    }
}
`}>
                    <Demo3md/>
                </Templete>

            </div>
        )
    }
}