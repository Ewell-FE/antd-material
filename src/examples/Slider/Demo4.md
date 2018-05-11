#  基本
## 基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。

````jsx
import Slider from '@/components/Slider'
import Icon from '@/components/Icon'
 
export class Demo4md extends Component {
        constructor(props) {
            super(props);
            const { max, min } = props;
                const mid = ((max - min) / 2).toFixed(5);
            this.state = {
                 preIconClass: this.props.value >= mid ? '' : 'anticon-highlight',
                      nextIconClass: this.props.value >= mid ? 'anticon-highlight' : '',
                      mid,
                      sliderValue: this.props.value,
            };
        }
    
 handleChange = (v) => {
    this.setState({
      preIconClass: v >= this.state.mid ? '' : 'anticon-highlight',
      nextIconClass: v >= this.state.mid ? 'anticon-highlight' : '',
      sliderValue: v,
    });
  }

    render() {
                   return (
                     <div className="icon-wrapper">
                     <Icon type="star" className={this.state.preIconClass}/>
                             <Slider {...this.props} onChange={this.handleChange} value={this.state.sliderValue} />
                           <Icon type="star" className={this.state.nextIconClass}/>
                           </div>
                   );
                 }
}
````