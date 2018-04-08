#  栅格间距
## 响应式网格侧重于一致的间距宽度，而不是列宽。材料设计的边距和列遵循8dp方形基线网格。间距可以是8,16,24或40dp宽。


````jsx
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';

const styles = theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        height: 140,
        width: 100
       },
      control: {
        padding: theme.spacing.unit * 2,
      }
});

@withStyles(styles, {name: 'MuiGrid-ant-demo1'})
export class <%=component%> extends Component {
     constructor(props) {
            super(props)
            this.state={
                spacing:'16'
            }
    }

     handleChange = key => (event, value) => {
        this.setState({
          [key]: value,
        })
     }

    render() {
        const {classes} = this.props
        const { spacing } = this.state;
        return (
             <Grid container className={classes.root} spacing={16}>
                    <Grid item xs={12}>
                      <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[0, 1, 2].map(value => (
                          <Grid key={value} item>
                            <Paper className={classes.paper} />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.control}>
                        <Grid container>
                          <Grid item>
                            <FormLabel>spacing</FormLabel>
                            <RadioGroup
                              name="spacing"
                              aria-label="spacing"
                              value={spacing}
                              onChange={this.handleChange('spacing')}
                              row
                            >
                              <FormControlLabel value="0" control={<Radio />} label="0" />
                              <FormControlLabel value="8" control={<Radio />} label="8" />
                              <FormControlLabel value="16" control={<Radio />} label="16" />
                              <FormControlLabel value="24" control={<Radio />} label="24" />
                              <FormControlLabel value="40" control={<Radio />} label="40" />
                            </RadioGroup>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
        )
    }
}
````