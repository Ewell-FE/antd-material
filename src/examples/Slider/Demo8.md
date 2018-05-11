#  带标签的滑块
## 使用 marks 属性标注分段式滑块，使用 value / defaultValue 指定滑块位置。当 included=false 时，表明不同标记间为并列关系。当 step=null 时，Slider 的可选值仅有 marks 标出来的部分。

````jsx
import Slider from '@/components/Slider'
import { Switch } from 'antd';
let marksT = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
}
export class Demo8md extends Component {
        constructor(props) {
            super(props);
            this.state = {
                disabled: false,
            };
        }
    
handleDisabledChange = (disabled) => {
    this.setState({ disabled});
  }

    render() {
                const { disabled } = this.state;
                   return (
                     <div>
                         <h4>included=true</h4>
                         <Slider marks={marksT} defaultValue={37} />
                         <Slider range marks={marksT} defaultValue={[26, 37]} />
                     
                         <h4>included=false</h4>
                         <Slider marks={marksT} included={false} defaultValue={37} />
                     
                         <h4>marks & step</h4>
                         <Slider marks={marksT} step={10} defaultValue={37} />
                     
                         <h4>step=null</h4>
                         <Slider marks={marksT} step={null} defaultValue={37} />
                       </div>
                   );
                 }
}
````