#  带icon的滑块
## 滑块左右可以设置图标来表达业务含义。

````jsx
import Slider from '@/components/Slider'
import Icon from '@/components/Icon'
import {withStyles} from 'material-ui/styles';
const stylesIcon = theme => {
    return {
        demo: {
            position: 'relative',
            padding: '0px 30px',

            '& i': {
                position: 'absolute',
                top: '-2px',
                width: '16px',
                height: '16px',
                lineHeight: '1',
                fontSize: '16px',
                color: 'rgba(0, 0, 0, .25)',

                '&:first-child': {
                    left: 0
                },
                '&:last-child':{
                    right: 0
                }  ,
            }
        }
    }
};
@withStyles(stylesIcon, {name: 'yhSlider'})
export class Demo4md extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:0
        }
    }

    handleChange = (value) => {
        this.setState({ value });
    }

    render() {
        const { classes, min, max } = this.props;
        const { value } = this.state;
        const mid = ((max - min) / 2).toFixed(5);
        const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
        const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
        return (
            <div className={classes.demo}>
                <Icon style={{ color: preColor }} type="frown-o" />
                <Slider onChange={this.handleChange} value={this.state.value} />
                <Icon style={{ color: nextColor }} type="smile-o" />
            </div>
        );
    }
}
````