import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Menu from '@/components/Menu'




export class Demo1md extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item>
                    <i className="fa fa-map" aria-hidden="true" style={{marginRight:'10px'}}></i>导航一
                </Menu.Item>
                <Menu.Item>
                    <i className="fa fa-pencil-square-o" aria-hidden="true" style={{marginRight:'10px'}}></i>导航二
                </Menu.Item>
                <Menu.Item>
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'10px'}}></i>导航三
                </Menu.Item>
                <Menu.Item>
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'10px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      顶部导航
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     水平的顶部导航菜单。
                                </p>
                    <Templete code={`import Menu from '@/components/Menu'

export class Demo1md extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item>
                    <i className="fa fa-map" aria-hidden="true" style={{marginRight:'10px'}}></i>导航一
                </Menu.Item>
                <Menu.Item>
                    <i className="fa fa-pencil-square-o" aria-hidden="true" style={{marginRight:'10px'}}></i>导航二
                </Menu.Item>
                <Menu.Item>
                   <i className="fa fa-tty" aria-hidden="true" style={{marginRight:'10px'}}></i>导航三
                </Menu.Item>
                <Menu.Item>
                   <a href="//www.baidu.com" target="_blank"><i className="fa fa-search" aria-hidden="true" style={{marginRight:'10px'}}></i>导航外链</a>
                </Menu.Item>
            </Menu>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}