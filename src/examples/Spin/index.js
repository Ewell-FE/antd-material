import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import purple from 'material-ui/colors/purple'
import Spin from '@/components/Spin'
import Alert from '@/components/Alert'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})
const styles2 = theme => ({
  root:{
    height:200,
    backgroundColor:'gray'
  }
})
const styles3 = theme => ({
  root:{
    height:200,
    backgroundColor:'gray'
  }
})




@withStyles(styles)
export class Demo1md extends Component {

    render() {
        const { classes } = this.props;
        return (
           <div>
                 <CircularProgress className={classes.progress} />
                 <CircularProgress className={classes.progress} size={50} />
                 <CircularProgress className={classes.progress} color="secondary" />
                 <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} />
           </div>
        )
    }
}



@withStyles(styles2)
export class Demo2md extends Component {

    render() {
        return (
           <Spin loading={true}>
                <div className={this.props.classes.root}></div>
           </Spin>
        )
    }
}



@withStyles(styles3)
export class Demo3md extends Component {

    render() {
        return (
           <Spin loading={true}>
                <Alert
                      message="Alert message title"
                      description="Further details about the context of this alert."
                      type="info"
                    />
           </Spin>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      基本用法
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     一个简单的 loading 状态
                                </p>
                    <Templete code={`import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

@withStyles(styles)
export class Demo1md extends Component {

    render() {
        const { classes } = this.props;
        return (
           <div>
                 <CircularProgress className={classes.progress} />
                 <CircularProgress className={classes.progress} size={50} />
                 <CircularProgress className={classes.progress} color="secondary" />
                 <CircularProgress className={classes.progress} style={{ color: purple[500] }} thickness={7} />
           </div>
        )
    }
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      容器
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     放入一个容器中
                                </p>
                    <Templete code={`import Spin from '@/components/Spin'
import { withStyles } from 'material-ui/styles';

const styles2 = theme => ({
  root:{
    height:200,
    backgroundColor:'gray'
  }
})

@withStyles(styles2)
export class Demo2md extends Component {

    render() {
        return (
           <Spin loading={true}>
                <div className={this.props.classes.root}></div>
           </Spin>
        )
    }
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      自定义描述文案
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     自定义描述文案
                                </p>
                    <Templete code={`import Spin from '@/components/Spin'
import Alert from '@/components/Alert'
import { withStyles } from 'material-ui/styles';

const styles3 = theme => ({
  root:{
    height:200,
    backgroundColor:'gray'
  }
})

@withStyles(styles3)
export class Demo3md extends Component {

    render() {
        return (
           <Spin loading={true}>
                <Alert
                      message="Alert message title"
                      description="Further details about the context of this alert."
                      type="info"
                    />
           </Spin>
        )
    }
}`}>
                        <Demo3md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}