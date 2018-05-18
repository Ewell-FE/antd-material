#  带输入框的滑块(小数)
## 和 数字输入框 组件保持同步。

````jsx
import Slider from '@/components/Slider'
import InputNumber from '@/components/InputNumber'
import Slider from '@/components/Slider'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const stylesDecimal = theme => ({
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
@withStyles(stylesDecimal, {name: 'MuiGrid-ant-demo1'})
export class Demo3md extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spacing:'16',
            inputValue: 1,
        };
    }

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        })
    }

    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
    }
    render() {
        const {classes} = this.props
        return (
            <Grid container className={classes.root} spacing={24}>
                <Grid item xs={8}>
                    <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} step={0.1}/>
                </Grid>
                <Grid item xs={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        step={0.1}
                        value={this.state.inputValue.toString()}
                        onChange={this.onChange}
                    />
                </Grid>
            </Grid>

        )
    }
}
````