import React, {Component} from 'react';
import Typography from 'material-ui/Typography'
import Api from './Api'
import Title from './Title'
import Templete from '../Template'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import { FormLabel, FormControlLabel , FormControl} from 'material-ui/Form'
import Radio, { RadioGroup } from 'material-ui/Radio'

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
const styles2 = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
})
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
const styles4 = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
  }
 })
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




@withStyles(styles, {name: 'MuiGrid-ant-demo1'})
export class Demo1md extends Component {
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



@withStyles(styles2, {name: 'MuiIcon-ant-demo2'})
export class Demo2md extends Component {
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



@withStyles(styles3, {name: 'MuiIcon-ant-demo3'})
export class Demo3md extends Component {
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


@withStyles(styles4, {name: 'MuiIcon-ant-demo4'})
export class Demo4md extends Component {
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


@withStyles(styles5, {name: 'MuiIcon-ant-demo5'})
export class Demo5md extends Component {
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


export default class App extends Component {
    render() {
        return (
            <div style={{width:900,padding:'0 24px',margin:'0 auto'}}>
                <Title />
                
                     <Typography variant="display1" gutterBottom>
                                      栅格间距
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     响应式网格侧重于一致的间距宽度，而不是列宽。材料设计的边距和列遵循8dp方形基线网格。间距可以是8,16,24或40dp宽。
                                </p>
                    <Templete code={`import { withStyles } from 'material-ui/styles';
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
export class Demo1md extends Component {
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
}`}>
                        <Demo1md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      Full-width
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     使用流体列和断点来确定布局何时需要更改。
                                </p>
                    <Templete code={`import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles2 = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
})

@withStyles(styles2, {name: 'MuiIcon-ant-demo2'})
export class Demo2md extends Component {
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
}`}>
                        <Demo2md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      Centered
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     当所有列（加上定义的边距）不再适合屏幕时，使用固定列并重新布置布局
                                </p>
                    <Templete code={`import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

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
export class Demo3md extends Component {
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
}`}>
                        <Demo3md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      Centered
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     当所有列（加上定义的边距）不再适合屏幕时，使用固定列并重新布置布局
                                </p>
                    <Templete code={`import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles4 = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
  }
 })
@withStyles(styles4, {name: 'MuiIcon-ant-demo4'})
export class Demo4md extends Component {
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
}`}>
                        <Demo4md />
                    </Templete>
                
                     <Typography variant="display1" gutterBottom>
                                      Centered
                                </Typography>
                                <p style={{margin:'24px 0 12px 0'}}>
                                     当所有列（加上定义的边距）不再适合屏幕时，使用固定列并重新布置布局
                                </p>
                    <Templete code={`import { withStyles } from 'material-ui/styles';
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
export class Demo5md extends Component {
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
}`}>
                        <Demo5md />
                    </Templete>
                
                <Api />
            </div>
        )
    }
}