#  Centered
## 当所有列（加上定义的边距）不再适合屏幕时，使用固定列并重新布置布局


````jsx
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles3 = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
  }
})

@withStyles(styles3, {name: 'MuiIcon-ant-demo3'})
export class <%=component%> extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                  </Grid>
                </div>
        )
    }
}
````