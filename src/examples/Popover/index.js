import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Popover from '@/components/Popover'
import Button from '@/components/Button'




export class Demo1md extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Popover
               placement='top'
               title={<div>this is title</div>}
               content={<div>this is content</div>}
               >
               <Button type="Primary">hover me</Button>
           </Popover>
        )
    }
}


export class Demo2md extends Component {
    constructor(props) {
        super(props);
    }
      positions=['topLeft','top','topRight','leftTop','rightTop','left','right',
                 'leftBottom','rightBottom','bottomLeft','bottom','bottomRight']
      styles={
          topLeft:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          top:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          bottom:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          topRight:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          rightTop:{marginBottom:'15px',width:'50%',textAlign:'right'},
          right:{marginBottom:'15px',width:'50%',top:'50%',textAlign:'right'},
          left:{marginBottom:'15px',width:'50%',top:'50%',},
          rightBottom:{marginBottom:'15px',width:'50%',textAlign:'right'},
          bottomRight:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          bottomLeft:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          leftBottom:{marginBottom:'15px',width:'50%',},
          leftTop:{marginBottom:'15px',width:'50%',}
        }
    render() {
        console.log(this.state)
        let self=this;
        return (
            <div style={{minHeight:'200px',display:'flex',flexFlow:'wrap',padding:'0 120px'}}>
            {
                this.positions.map((item,index)=>{
                    return(
                        <div style={this.styles[item]} key={index}>
                             <Popover
                               placement={item}
                               title={<div>this is title</div>}
                               content={<div>this is content</div>}
                               trigger='click'
                               >
                                   <Button>
                                   {item}
                                   </Button>
                               </Popover>
                        </div>
                    )
                })
            }

            </div>
        )
    }
}


export class Demo3md extends Component {
    state = {
        visible: false,
    }
    hide = () => {
        this.setState({
          visible: false,
        });
    }
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    render() {
        return (
           <Popover
               placement='top'
               title={<div>this is title</div>}
               content={<a onClick={this.hide} style={{cursor:'pointer',color:'#1890ff'}}>Close</a>}
               trigger='click'
               visible={this.state.visible}
               onVisibleChange={this.handleVisibleChange}
               >
               <Button type="Primary">click me</Button>
           </Popover>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      基本
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     最简单的用法，浮层的大小由内容区域决定。
                                </p>
                    <Templete code={`import Popover from '@/components/Popover'
import Button from '@/components/Button'

export class Demo1md extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <Popover
               placement='top'
               title={<div>this is title</div>}
               content={<div>this is content</div>}
               >
               <Button type="Primary">hover me</Button>
           </Popover>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      位置
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     位置有十二个方向。
                                </p>
                    <Templete code={`import Popover from '@/components/Popover'
import Button from '@/components/Button'

export class Demo2md extends Component {
    constructor(props) {
        super(props);
    }
      positions=['topLeft','top','topRight','leftTop','rightTop','left','right',
                 'leftBottom','rightBottom','bottomLeft','bottom','bottomRight']
      styles={
          topLeft:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          top:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          bottom:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          topRight:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          rightTop:{marginBottom:'15px',width:'50%',textAlign:'right'},
          right:{marginBottom:'15px',width:'50%',top:'50%',textAlign:'right'},
          left:{marginBottom:'15px',width:'50%',top:'50%',},
          rightBottom:{marginBottom:'15px',width:'50%',textAlign:'right'},
          bottomRight:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          bottomLeft:{marginBottom:'15px',width:'33.3%',textAlign:'center'},
          leftBottom:{marginBottom:'15px',width:'50%',},
          leftTop:{marginBottom:'15px',width:'50%',}
        }
    render() {
        console.log(this.state)
        let self=this;
        return (
            <div style={{minHeight:'200px',display:'flex',flexFlow:'wrap',padding:'0 120px'}}>
            {
                this.positions.map((item,index)=>{
                    return(
                        <div style={this.styles[item]} key={index}>
                             <Popover
                               placement={item}
                               title={<div>this is title</div>}
                               content={<div>this is content</div>}
                               trigger='click'
                               >
                                   <Button>
                                   {item}
                                   </Button>
                               </Popover>
                        </div>
                    )
                })
            }

            </div>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      从浮层内关闭
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     使用 visible 属性控制浮层显示。
                                </p>
                    <Templete code={`import Popover from '@/components/Popover'
import Button from '@/components/Button'

export class Demo3md extends Component {
    state = {
        visible: false,
    }
    hide = () => {
        this.setState({
          visible: false,
        });
    }
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    render() {
        return (
           <Popover
               placement='top'
               title={<div>this is title</div>}
               content={<a onClick={this.hide} style={{cursor:'pointer',color:'#1890ff'}}>Close</a>}
               trigger='click'
               visible={this.state.visible}
               onVisibleChange={this.handleVisibleChange}
               >
               <Button type="Primary">click me</Button>
           </Popover>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}