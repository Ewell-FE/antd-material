import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import Icon from '@/components/Icon'
import {withStyles} from 'material-ui/styles'

const styles = theme => {
    return {
         icon: {
            margin: theme.spacing.unit * 2,
         },
         icon2: {
                 margin: theme.spacing.unit * 2,
                 fontSize:'28px'
         },
         icon3: {
                 margin: theme.spacing.unit * 2,
                 fontSize:'48px',
                 color:theme.colors.error
         }
    }
}



@withStyles(styles, {name: 'MuiIcon-ant'})
export class Demomd extends Component {
    render() {
        const {classes} = this.props
        return (
            <div>
                <span className={classes.icon}><Icon type="star" /></span>
                <span className={classes.icon2}><Icon type="star" /></span>
                <span className={classes.icon3}><Icon type="star" /></span>

            </div>
        )
    }
}


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      字体图标
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     字体图标就是字体，所以我们不推荐再字体上写样式，字体要加样式就父级元素上加
                                </p>
                    <Templete code={`import Icon from '@/components/Icon'
import {withStyles} from 'material-ui/styles';

const styles = theme => {
    return {
         icon: {
            margin: theme.spacing.unit * 2,
         },
         icon2: {
                 margin: theme.spacing.unit * 2,
                 fontSize:'28px'
         },
         icon3: {
                 margin: theme.spacing.unit * 2,
                 fontSize:'48px',
                 color:theme.colors.error
         }
    }
}
@withStyles(styles, {name: 'MuiIcon-ant'})
export class Demomd extends Component {
    render() {
        const {classes} = this.props
        return (
            <div>
                <span className={classes.icon}><Icon type="star" /></span>
                <span className={classes.icon2}><Icon type="star" /></span>
                <span className={classes.icon3}><Icon type="star" /></span>

            </div>
        )
    }
}`}>
                        <Demomd />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}