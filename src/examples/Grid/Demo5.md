#  Centered
## 当所有列（加上定义的边距）不再适合屏幕时，使用固定列并重新布置布局


````jsx
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';

const styles5 = theme => ({
 root: {
     flexGrow: 1,
   },
   demo: {
     height: 240,
   },
   paper: {
     padding: theme.spacing.unit * 2,
     height: '100%',
   },
   control: {
     padding: theme.spacing.unit * 2,
   }
})
@withStyles(styles5, {name: 'MuiIcon-ant-demo5'})
export class <%=component%> extends Component {
    constructor(props) {
            super(props)
            this.state={
                direction: 'row',
                justify: 'center',
                alignItems: 'center'
            }
    }

     handleChange = key => (event, value) => {
        this.setState({
          [key]: value,
        })
     }

    render() {
        const { classes } = this.props;
        const { alignItems, direction, justify } = this.state;
        return (
            <Grid container className={classes.root}>
                 <Grid item xs={12}>
                          <Grid
                            container
                            spacing={16}
                            className={classes.demo}
                            alignItems={alignItems}
                            direction={direction}
                            justify={justify}
                          >
                            {[0, 1, 2].map(value => (
                              <Grid key={value} item>
                                <Paper
                                  className={classes.paper}
                                  style={{ paddingTop: (value + 1) * 10, paddingBottom: (value + 1) * 10 }}
                                >
                                  {'Cell '+(value + 1)+''}
                                </Paper>
                              </Grid>
                            ))}
                          </Grid>
                 </Grid>
                 <Grid item xs={12}>
                           <Paper className={classes.control}>
                             <Grid container>
                               <Grid item xs={6} sm={4}>
                                 <FormControl component="fieldset">
                                   <FormLabel>direction</FormLabel>
                                   <RadioGroup
                                     name="direction"
                                     aria-label="direction"
                                     value={direction}
                                     onChange={this.handleChange('direction')}
                                   >
                                     <FormControlLabel value="row" control={<Radio />} label="row" />
                                     <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                                     <FormControlLabel value="column" control={<Radio />} label="column" />
                                     <FormControlLabel
                                       value="column-reverse"
                                       control={<Radio />}
                                       label="column-reverse"
                                     />
                                   </RadioGroup>
                                 </FormControl>
                               </Grid>
                               <Grid item xs={6} sm={4}>
                                 <FormControl component="fieldset">
                                   <FormLabel>justify</FormLabel>
                                   <RadioGroup
                                     name="justify"
                                     aria-label="justify"
                                     value={justify}
                                     onChange={this.handleChange('justify')}
                                   >
                                     <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                                     <FormControlLabel value="center" control={<Radio />} label="center" />
                                     <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                                     <FormControlLabel
                                       value="space-between"
                                       control={<Radio />}
                                       label="space-between"
                                     />
                                     <FormControlLabel
                                       value="space-around"
                                       control={<Radio />}
                                       label="space-around"
                                     />
                                   </RadioGroup>
                                 </FormControl>
                               </Grid>
                               <Grid item xs={6} sm={4}>
                                 <FormControl component="fieldset">
                                   <FormLabel>alignItems</FormLabel>
                                   <RadioGroup
                                     name="alignItems"
                                     aria-label="alignItems"
                                     value={alignItems}
                                     onChange={this.handleChange('alignItems')}
                                   >
                                     <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                                     <FormControlLabel value="center" control={<Radio />} label="center" />
                                     <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                                     <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                                     <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                                   </RadioGroup>
                                 </FormControl>
                               </Grid>
                             </Grid>
                           </Paper>
                         </Grid>
            </Grid>
        )
    }
}
````