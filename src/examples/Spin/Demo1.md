#  基本用法
## 一个简单的 loading 状态


````jsx
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import purple from 'material-ui/colors/purple';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

@withStyles(styles)
export class <%=component%> extends Component {

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
````