#  可以自定义显示
## 切换按钮和结果分开。


````jsx
import Cascader from '@/components/Cascader';

export class <%=component%> extends Component {

    state = {
        text: 'Unselect',
      };

      onChange = (value, selectedOptions) => {
        this.setState({
          text: selectedOptions.map(o => o.label).join(', '),
        });
      }
      render() {
          const options = [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
              value: 'hangzhou',
              label: 'Hangzhou',
            }],
          }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
              value: 'nanjing',
              label: 'Nanjing',
            }],
          }];
        return (
          <span>
            {this.state.text}
            &nbsp;
            <Cascader options={options} onChange={this.onChange}>
              <a href="#">Change city</a>
            </Cascader>
          </span>
        );
      }
}
````