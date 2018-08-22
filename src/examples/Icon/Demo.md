#  字体图标
## 字体图标就是字体，所以我们不推荐在字体上写样式，字体要加样式就父级元素上加


````jsx
import Icon from 'antd-material/core/Icon'
import {withStyles} from '@material-ui/core/styles';

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
@withStyles(styles, {name: 'MuiIconAnt'})
export class <%=component%> extends Component {
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
````